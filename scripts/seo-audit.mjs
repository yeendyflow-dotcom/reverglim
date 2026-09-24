/**
 * seo-audit.mjs — Auditoría SEO profunda de reverglim.com
 * Uso: node scripts/seo-audit.mjs
 */

const SITE = 'https://reverglim.com';
const PAGES = [
  '/',
  '/que-es-reverglim',
  '/alternativa-tiktok',
  '/alternativa-instagram',
  '/red-social-segura-menores',
  '/red-social-sin-publicidad',
  '/mejor-red-social-2026',
  '/seguridad-infantil',
  '/privacidad',
  '/term',
];

const EXTRA_CHECKS = [
  { label: 'robots.txt',       url: `${SITE}/robots.txt` },
  { label: 'sitemap.xml',      url: `${SITE}/sitemap.xml` },
  { label: 'llms.txt',         url: `${SITE}/llms.txt` },
  { label: 'IndexNow key',     url: `${SITE}/f4e1ec7394a24b68aba719919527b09d.txt` },
  { label: 'og-image',         url: `${SITE}/images/og-image.jpg` },
  { label: 'favicon',          url: `${SITE}/favicon.png` },
  { label: 'site.webmanifest', url: `${SITE}/site.webmanifest` },
];

const LEGACY_DOMAINS = [
  'https://reverglim.vercel.app/',
  'https://www.reverglim.com/',
];

// ── helpers ──────────────────────────────────────────────────────────────────

function ok(msg)   { console.log(`  ✅  ${msg}`); }
function warn(msg) { console.log(`  ⚠️   ${msg}`); }
function fail(msg) { console.log(`  ❌  ${msg}`); }
function info(msg) { console.log(`  ℹ️   ${msg}`); }
function section(title) { console.log(`\n${'─'.repeat(60)}\n  ${title}\n${'─'.repeat(60)}`); }

async function fetchHead(url, opts = {}) {
  try {
    const r = await fetch(url, { method: 'HEAD', redirect: 'manual', signal: AbortSignal.timeout(8000), ...opts });
    return r;
  } catch (e) {
    return { status: 0, headers: new Headers(), error: e.message };
  }
}

async function fetchGet(url) {
  try {
    const r = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(10000) });
    const text = await r.text();
    return { status: r.status, headers: r.headers, body: text };
  } catch (e) {
    return { status: 0, headers: new Headers(), body: '', error: e.message };
  }
}

function extractMeta(html, name) {
  const re = new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']+)["']`, 'i');
  const m = html.match(re) || html.match(new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:name|property)=["']${name}["']`, 'i'));
  return m ? m[1] : null;
}

function extractLink(html, rel) {
  const re = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]+href=["']([^"']+)["']`, 'i');
  const m = html.match(re) || html.match(new RegExp(`<link[^>]+href=["']([^"']+)["'][^>]+rel=["']${rel}["']`, 'i'));
  return m ? m[1] : null;
}

function extractJsonLd(html) {
  const schemas = [];
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    try { schemas.push(JSON.parse(m[1])); } catch {}
  }
  return schemas;
}

// ── CHECKS ───────────────────────────────────────────────────────────────────

async function checkRedirects() {
  section('1. REDIRECTS Y CONSOLIDACIÓN DE DOMINIO');

  for (const legacy of LEGACY_DOMAINS) {
    const r = await fetchHead(legacy);
    const loc = r.headers?.get?.('location') || r.headers?.get?.('Location') || '—';
    if (r.status === 301 || r.status === 308) {
      if (loc.startsWith(SITE)) {
        ok(`${legacy} → ${r.status} redirige a ${loc}`);
      } else {
        warn(`${legacy} → ${r.status} pero destino inesperado: ${loc}`);
      }
    } else if (r.status === 200) {
      fail(`${legacy} responde 200 OK — contenido duplicado indexable`);
    } else {
      info(`${legacy} → status ${r.status} (${r.error || ''})`);
    }
  }

  // Verifica que el canónico responde 200
  const canon = await fetchHead(`${SITE}/`);
  if (canon.status === 200) {
    ok(`${SITE}/ responde 200 OK (dominio canónico activo)`);
  } else {
    fail(`${SITE}/ responde ${canon.status}`);
  }
}

async function checkStaticFiles() {
  section('2. ARCHIVOS ESTÁTICOS CRÍTICOS');
  for (const { label, url } of EXTRA_CHECKS) {
    const r = await fetchHead(url);
    if (r.status === 200) {
      ok(`${label} → 200 OK`);
    } else {
      fail(`${label} → ${r.status} (${url})`);
    }
  }
}

async function checkRobots() {
  section('3. ROBOTS.TXT');
  const { status, body } = await fetchGet(`${SITE}/robots.txt`);
  if (status !== 200) { fail(`robots.txt → ${status}`); return; }

  ok('robots.txt accesible');
  if (/User-agent:\s*\*/i.test(body))   ok('User-agent: * presente');
  else                                   warn('User-agent: * no encontrado');

  if (/Allow:\s*\//i.test(body))        ok('Allow: / presente');
  else                                   warn('Allow: / no encontrado');

  if (/Disallow:.*\/_next\//i.test(body)) ok('Disallow: /_next/ presente');
  else                                     warn('Disallow: /_next/ no encontrado');

  const sitemapMatch = body.match(/Sitemap:\s*(.+)/i);
  if (sitemapMatch) {
    const sitemapUrl = sitemapMatch[1].trim();
    ok(`Sitemap declarado: ${sitemapUrl}`);
    if (!sitemapUrl.startsWith(SITE)) warn(`Sitemap URL no apunta al dominio canónico: ${sitemapUrl}`);
  } else {
    fail('Sitemap no declarado en robots.txt');
  }

  // Detectar si hay noindex global accidental
  if (/Disallow:\s*\/\s*$/m.test(body)) fail('¡Disallow: / bloquea todo el sitio!');
}

async function checkSitemap() {
  section('4. SITEMAP.XML');
  const { status, body } = await fetchGet(`${SITE}/sitemap.xml`);
  if (status !== 200) { fail(`sitemap.xml → ${status}`); return; }

  ok('sitemap.xml accesible');
  const locs = [...body.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  info(`URLs en sitemap: ${locs.length}`);

  for (const loc of locs) {
    if (!loc.startsWith(SITE)) warn(`URL no canónica en sitemap: ${loc}`);
    else ok(`  ${loc}`);
  }

  if (/<lastmod>/i.test(body)) ok('lastmod presente en sitemap');
  else warn('lastmod ausente en sitemap');

  if (/<priority>/i.test(body)) ok('priority presente en sitemap');
}

async function checkPageSEO(path) {
  const url = path === '/' ? `${SITE}/` : `${SITE}${path}`;
  const { status, body, error } = await fetchGet(url);

  if (status !== 200) {
    fail(`${path} → ${status} ${error || ''}`);
    return;
  }

  const issues = [];
  const title = body.match(/<title[^>]*>(.*?)<\/title>/i)?.[1] || '';
  const desc  = extractMeta(body, 'description');
  const canon = extractLink(body, 'canonical');
  const ogUrl = extractMeta(body, 'og:url');
  const ogImg = extractMeta(body, 'og:image');
  const robots = extractMeta(body, 'robots');
  const schemas = extractJsonLd(body);

  // Title
  if (!title) issues.push('title ausente');
  else if (title.length < 30) issues.push(`title muy corto (${title.length} chars): "${title}"`);
  else if (title.length > 70) issues.push(`title largo (${title.length} chars) — puede truncarse`);

  // Description
  if (!desc) issues.push('meta description ausente');
  else if (desc.length < 100) issues.push(`description corta (${desc.length} chars)`);
  else if (desc.length > 165) issues.push(`description larga (${desc.length} chars) — puede truncarse`);

  // Canonical
  const expectedCanon = path === '/' ? `${SITE}/` : `${SITE}${path}`;
  if (!canon) issues.push('canonical ausente');
  else if (canon !== expectedCanon) issues.push(`canonical incorrecto: "${canon}" (esperado: "${expectedCanon}")`);

  // og:url
  if (!ogUrl) issues.push('og:url ausente');
  else if (ogUrl !== expectedCanon) issues.push(`og:url no coincide con canonical: "${ogUrl}"`);

  // og:image
  if (!ogImg) issues.push('og:image ausente');
  else if (!ogImg.startsWith('https://')) issues.push(`og:image no es URL absoluta: "${ogImg}"`);

  // robots meta (noindex accidental)
  if (robots && /noindex/i.test(robots)) issues.push(`¡META ROBOTS NOINDEX detectado! "${robots}"`);

  // X-Robots-Tag header
  // (no disponible en fetchGet sin inspeccionar headers)

  // Structured data
  if (schemas.length === 0) issues.push('Sin JSON-LD structured data');
  else {
    const types = schemas.map(s => s['@type']).join(', ');
    // Verifica que Organization esté en home o _document
    if (path === '/') {
      const hasOrg = schemas.some(s => s['@type'] === 'Organization');
      const hasWeb = schemas.some(s => s['@type'] === 'WebSite');
      if (!hasOrg) issues.push('Schema Organization ausente en home');
      if (!hasWeb) issues.push('Schema WebSite ausente en home');
    }
  }

  // H1
  const h1Count = (body.match(/<h1[\s>]/gi) || []).length;
  if (h1Count === 0) issues.push('Sin H1');
  else if (h1Count > 1) issues.push(`Múltiples H1 (${h1Count})`);

  // lang attribute
  if (!/<html[^>]+lang=/i.test(body)) issues.push('Atributo lang ausente en <html>');

  if (issues.length === 0) {
    ok(`${path} — sin problemas`);
  } else {
    console.log(`\n  📄 ${path} (${status})`);
    console.log(`     title: "${title.slice(0, 70)}${title.length > 70 ? '…' : ''}"`);
    for (const issue of issues) warn(issue);
  }
}

async function checkAllPages() {
  section('5. AUDITORÍA POR PÁGINA (canonical, meta, schemas, H1)');
  for (const path of PAGES) {
    await checkPageSEO(path);
  }
}

async function checkEntitySignals() {
  section('6. SEÑALES DE ENTIDAD DE MARCA (Knowledge Graph)');

  // sameAs en Organization schema
  const { body } = await fetchGet(`${SITE}/`);
  const schemas = extractJsonLd(body);
  const org = schemas.find(s => s['@type'] === 'Organization');

  if (org) {
    ok('Schema Organization encontrado en home');
    if (org.sameAs && org.sameAs.length > 0) {
      ok(`sameAs: ${org.sameAs.length} perfiles → ${org.sameAs.join(', ')}`);
      if (org.sameAs.length < 4) warn('Pocos perfiles en sameAs — añadir TikTok, X, YouTube, LinkedIn cuando existan');
    } else {
      fail('sameAs vacío — Google no puede consolidar la entidad de marca');
    }
    if (!org.logo) warn('logo ausente en Organization schema');
    if (!org.description) warn('description ausente en Organization schema');
    if (!org.knowsAbout) warn('knowsAbout ausente — ayuda a definir el tema de la entidad');
  } else {
    fail('Schema Organization no encontrado en home');
  }

  // llms.txt
  const llms = await fetchHead(`${SITE}/llms.txt`);
  if (llms.status === 200) ok('llms.txt accesible — señal para AI Overviews (Google, ChatGPT, Perplexity)');
  else fail('llms.txt no accesible — crítico para corregir el AI Overview erróneo');

  // Wikidata (solo aviso)
  warn('Wikidata: verificar manualmente si existe item "Reverglim" en https://www.wikidata.org');
  warn('Google Business Profile: verificar si está creado y verificado');
}

async function checkXRobotsTag() {
  section('7. X-ROBOTS-TAG EN PREVIEWS DE VERCEL');
  // Comprueba que el dominio canónico NO tenga noindex en header
  const r = await fetch(`${SITE}/`, { redirect: 'manual', signal: AbortSignal.timeout(8000) });
  const xRobots = r.headers.get('x-robots-tag');
  if (!xRobots) {
    ok(`${SITE}/ no tiene X-Robots-Tag (correcto — no debe tener noindex)`);
  } else if (/noindex/i.test(xRobots)) {
    fail(`¡X-Robots-Tag: ${xRobots} en el dominio canónico! Esto bloquea la indexación.`);
  } else {
    info(`X-Robots-Tag en canónico: "${xRobots}"`);
  }
}

async function checkCoreWebVitals() {
  section('8. SEÑALES TÉCNICAS ADICIONALES');

  // HTTPS
  const r = await fetchHead(`http://reverglim.com/`);
  if (r.status === 301 || r.status === 308) {
    const loc = r.headers?.get?.('location') || '';
    if (loc.startsWith('https://')) ok('HTTP → HTTPS redirect activo');
    else warn(`HTTP redirect a: ${loc}`);
  } else if (r.status === 200) {
    warn('HTTP responde 200 sin redirect a HTTPS');
  } else {
    info(`HTTP → ${r.status}`);
  }

  // Verifica que /sitemap.xml esté en el Content-Type correcto
  const sm = await fetch(`${SITE}/sitemap.xml`, { signal: AbortSignal.timeout(8000) });
  const ct = sm.headers.get('content-type') || '';
  if (/xml/i.test(ct)) ok(`sitemap.xml Content-Type: ${ct}`);
  else warn(`sitemap.xml Content-Type inesperado: "${ct}" (debe ser text/xml o application/xml)`);

  // Cache-Control en sitemap
  const cc = sm.headers.get('cache-control') || '';
  if (cc) ok(`sitemap.xml Cache-Control: ${cc}`);
  else warn('sitemap.xml sin Cache-Control');
}

// ── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n══════════════════════════════════════════════════════════════');
  console.log('  AUDITORÍA SEO PROFUNDA — reverglim.com');
  console.log('══════════════════════════════════════════════════════════════');

  await checkRedirects();
  await checkStaticFiles();
  await checkRobots();
  await checkSitemap();
  await checkAllPages();
  await checkEntitySignals();
  await checkXRobotsTag();
  await checkCoreWebVitals();

  console.log('\n══════════════════════════════════════════════════════════════');
  console.log('  FIN DE AUDITORÍA');
  console.log('══════════════════════════════════════════════════════════════\n');
}

main().catch(console.error);
