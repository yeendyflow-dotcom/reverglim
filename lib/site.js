/**
 * Fuente única de verdad para la identidad del sitio.
 * TODAS las URLs canónicas, Open Graph, sitemap y datos estructurados
 * deben construirse desde aquí. Para cambiar el dominio canónico,
 * edita SITE_URL en este único archivo.
 */

export const SITE_URL = 'https://reverglim.com';

export const SITE_NAME = 'Reverglim';

export const SITE_TAGLINE = 'La red social POST-SCROLL';

export const SITE_DESCRIPTION =
  'Reverglim es la red social POST-SCROLL: sin scroll infinito, con contenido exclusivo y saludable, privacidad real y seguridad por diseño.';

/**
 * Perfiles oficiales de la marca (schema.org/sameAs).
 * Google usa esta lista para consolidar la entidad de marca
 * "Reverglim" en su Knowledge Graph. IMPORTANTE: solo incluye
 * URLs de perfiles que EXISTEN y están activos (un perfil
 * inexistente debilita la señal). Cuando crees TikTok/X/YouTube/
 * Facebook oficiales, agrégalos aquí.
 */
export const SOCIAL_PROFILES = [
  'https://www.instagram.com/reverglim/',
  'https://www.instagram.com/rglimoficial/',
];
