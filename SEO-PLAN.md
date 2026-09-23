# Plan profesional de indexación y posicionamiento — Reverglim

## Diagnóstico (qué estaba pasando)

| # | Problema detectado | Impacto |
|---|--------------------|---------|
| 1 | El servidor redirigía `reverglim.com` → `www.reverglim.com` (308), pero **todos** los canonicals, og:url, schemas y el sitemap declaraban `https://reverglim.com`. Google recibía señales contradictorias en cada URL. | Google no consolidaba autoridad en ninguna versión → la web no aparecía. |
| 2 | `reverglim.vercel.app` respondía **200 OK** con el contenido completo e indexable. | Contenido duplicado que dividía la autoridad del dominio oficial. |
| 3 | La entidad "Reverglim" no existía para Google (sin consolidación de marca). | El spam de Instagram ("Turbo VPN") ocupó el vacío y el AI Overview inventó una definición errónea. |

## FASE 1 — Correcciones técnicas (ya implementadas en código)

- [x] **Fuente única de dominio**: `lib/site.js` centraliza `SITE_URL` (`https://reverglim.com`), nombre y perfiles. Todas las páginas, canonicals, og:url, schemas y sitemap lo consumen.
- [x] **`reverglim.vercel.app` neutralizado**: redirect 308 permanente al dominio oficial en `next.config.js` (conserva el path). Los previews `*.vercel.app` reciben `X-Robots-Tag: noindex, nofollow, noarchive`.
- [x] **Schemas JSON-LD reforzados** (`pages/_document.js`): Organization + WebSite + SoftwareApplication conectados por `@id`, `brand`, `knowsAbout` y `sameAs`. Eliminado el `SearchAction` falso (apuntaba a una búsqueda inexistente: riesgo de penalización por datos estructurados engañosos).
- [x] **hreflang** `es` + `x-default`, **`site.webmanifest`** (señal de marca/PWA).
- [x] **`/llms.txt`** (estándar [llmstxt.org](https://llmstxt.org)): definición canónica de Reverglim para modelos de IA (Google AI Overviews, ChatGPT, Perplexity, Claude). Ataca directamente el problema de la imagen que reportó el usuario.
- [x] **IndexNow** (`npm run indexnow`): ping de indexación instantánea a Bing, Yandex, Seznam y Naver.

## FASE 2 — Acciones manuales urgentes (30 min, críticas)


1. **Vercel Dashboard → Settings → Domains** (resuelve el problema #1):
   - Configura `reverglim.com` como dominio de producción **sin redirect**.
   - Configura `www.reverglim.com` para redirigir a `reverglim.com`.
   - Resultado: una sola versión viva (200), consistente con todos los canonicals.
2. **Haz deploy** de esta rama a producción (los cambios de Fase 1 se activan).
3. **Google Search Console** (propiedad `reverglim.com`):
   - Sitemaps → enviar `https://reverglim.com/sitemap.xml`.
   - Inspección de URL → "Solicitar indexación" en: `/`, `/que-es-reverglim`, `/alternativa-tiktok`, `/alternativa-instagram`.
4. Tras el deploy, comprueba que la clave responde: `https://reverglim.com/f4e1ec7394a24b68aba719919527b09d.txt` → luego `npm run indexnow` (Bing/Yandex quedan notificados).
5. **Bing Webmaster Tools**: importa el sitio desde Search Console (opción "Import from GSC") y verifica que el sitemap quede registrado.

## FASE 3 — Construcción de la entidad de marca (semana 1–4)

El AI Overview describe mal a Reverglim porque Google no tiene fuentes de confianza. Hay que crear la entidad:

1. **Perfiles sociales oficiales consistentes**: crear/activar TikTok, X, YouTube, Facebook y LinkedIn con el handle `@reverglim`, todos enlazando a `https://reverglim.com` y entre sí. Al crearlos, añadirlos a `SOCIAL_PROFILES` en `lib/site.js`.
2. **Wikidata**: crear el item "Reverglim" (organización/software). Es la fuente #1 del Knowledge Graph de Google → corrige el AI Overview y habilita un futuro panel de conocimiento.
3. **Google Business Profile** (si hay entidad legal) y fichas en directorios tech: Product Hunt, AlternativeTo, Crunchbase. Nombre/dirección/web idénticos en todas (consistencia NAP).
4. **Enlaces de marca**: cada publicación en redes debe enlazar al dominio. Los backlinks con anchor "Reverglim" enseñan a Google qué es la marca.
5. En los posts de Instagram, usa la bio y el enlace — evita que terceros (como la cuenta de "Turbo VPN") definan el término.

## FASE 4 — Medición y mantenimiento

- Revisar semanalmente GSC: **Páginas → "Indexadas"** deben subir a 12; la consulta `reverglim` debe ganar impresiones/clics en 2–6 semanas.
- Ejecutar `npm run indexnow` tras cada deploy con cambios de contenido.
- Cada página nueva: añadirla a `pages/sitemap.xml.js` **y** a `scripts/indexnow.mjs`.
- Verificar mensualmente en Bing Webmaster Tools y con `site:reverglim.com` en Google/Bing/DuckDuckGo.

## Resultado esperado

- Búsqueda "reverglim" → reverglim.com como primer resultado con panel de marca correcto.
- El AI Overview citará la definición canónica del sitio (reforzada por `llms.txt` y Wikidata).
- Presencia unificada en Google, Bing, Yahoo, DuckDuckGo, Yandex y asistentes de IA.
