# 🔴 REVERGLIM — Red Social POST-SCROLL

Sitio web oficial de Reverglim desarrollado con **Next.js 14** + **CSS Modules**, listo para despliegue en **Vercel**.

---

## 📁 Estructura del proyecto

```
reverglim/
├── pages/
│   ├── _app.js                    # App wrapper global
│   ├── _document.js               # HTML base + SEO meta tags + JSON-LD
│   ├── index.js                   # Página principal (POST-SCROLL)
│   ├── politicas-de-privacidad.js # Política de privacidad
│   └── sitemap.xml.js             # Sitemap dinámico para Google
├── styles/
│   ├── globals.css                # Variables CSS, reset, cursor
│   ├── Home.module.css            # Estilos página principal
│   └── Policy.module.css          # Estilos página de políticas
├── public/
│   ├── images/
│   │   ├── bg.jpg                 # ⚠️ REEMPLAZAR con tu imagen de fondo
│   │   ├── logo.jpg               # ⚠️ REEMPLAZAR con tu logo
│   │   └── og-image.jpg           # ⚠️ REEMPLAZAR imagen Open Graph (1200×630)
│   ├── robots.txt                 # Configuración para bots SEO
│   └── site.webmanifest           # Manifiesto PWA
├── package.json
└── next.config.js
```

---

## 🖼️ Imágenes requeridas

Coloca estas imágenes en `/public/images/`:

| Archivo       | Descripción                                  | Tamaño recomendado |
|---------------|----------------------------------------------|-------------------|
| `bg.jpg`      | Imagen de fondo del hero                     | 1920×1080px       |
| `logo.jpg`    | Logo Reverglim (la X roja)                   | 200×200px         |
| `og-image.jpg`| Imagen para redes sociales (Open Graph)      | 1200×630px        |

---

## 🚀 Instalación y desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

---

## ☁️ Despliegue en Vercel

### Opción 1: Vercel CLI (recomendado)
```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel

# Desplegar a producción
vercel --prod
```

### Opción 2: GitHub + Vercel Dashboard
1. Sube el proyecto a un repositorio de GitHub
2. Ve a [vercel.com](https://vercel.com) → "Add New Project"
3. Importa tu repositorio
4. Vercel detecta automáticamente Next.js
5. Haz clic en "Deploy"

### Variables de entorno (opcional)
Si agregas formulario de contacto con Resend/SendGrid, añade en Vercel Dashboard:
```
RESEND_API_KEY=tu_api_key
```

---

## 🔍 SEO — Optimizaciones incluidas

- ✅ Meta tags completos (title, description, keywords)
- ✅ Open Graph para Facebook/LinkedIn/WhatsApp
- ✅ Twitter Cards
- ✅ JSON-LD (Schema.org — WebSite)
- ✅ Sitemap dinámico (`/sitemap.xml`)
- ✅ `robots.txt` con referencia al sitemap
- ✅ Canonical URLs
- ✅ `robots: index, follow`
- ✅ `theme-color` para navegadores móviles
- ✅ `apple-touch-icon` y favicons
- ✅ `site.webmanifest` (PWA)
- ✅ HTML semántico (nav, main, section, article, header, footer)
- ✅ ARIA labels para accesibilidad
- ✅ `lang="es"` en el HTML

### Para mejorar aún más el SEO:
1. Registra el sitio en [Google Search Console](https://search.google.com/search-console)
2. Envía el sitemap: `https://reverglim.com/sitemap.xml`
3. Configura Google Analytics o Plausible para tracking
4. Agrega reseñas/testimonios con Schema.org `Review`

---

## 🎮 Mecánica POST-SCROLL

La navegación entre secciones funciona mediante:

| Acción | Efecto |
|--------|--------|
| Scroll ↓ (rueda del mouse) | Siguiente sección |
| Scroll ↑ (rueda del mouse) | Sección anterior |
| Swipe ↑ (touch/móvil) | Siguiente sección |
| Swipe ↓ (touch/móvil) | Sección anterior |
| Tecla ↓ / PageDown | Siguiente sección |
| Tecla ↑ / PageUp | Sección anterior |
| Click en dot (barra lateral) | Ir a sección específica |
| Click en nav link | Ir a sección específica |

---

## 🎨 Sistema de diseño

```css
/* Colores */
--red:        #E8001C   /* Rojo marca */
--black:      #080808   /* Negro base */
--white:      #F2EDE8   /* Blanco cálido */

/* Tipografía */
--font-display: 'Anton'      /* Títulos grandes */
--font-heading: 'Bebas Neue' /* Subtítulos */
--font-body:    'Rajdhani'   /* Texto body */
```

---

## 📱 Responsive

- ✅ Desktop (1200px+)
- ✅ Tablet (768px – 1199px)
- ✅ Móvil (< 768px) — menú hamburguesa + swipe navigation

---

## 🛠️ Tecnologías

- **Next.js 14** — Framework React con SSR/SSG
- **CSS Modules** — Estilos scoped sin dependencias
- **Google Fonts** — Anton + Bebas Neue + Rajdhani
- **Vercel** — Hosting y CDN global

---

*Reverglim © 2024 — Todos los derechos reservados*
"# reverglim" 
"# reverglim" 
