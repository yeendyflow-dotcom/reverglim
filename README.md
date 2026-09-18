# Reverglim — Web (Next.js)

Landing page de Reverglim construida con **Next.js** (Pages Router) sobre **Node.js**,
con toda la lógica en **JSX/React** (hooks `useState`, `useEffect`, `useRef`) y estilos
en **CSS puro**.

## Estructura del proyecto

```
reverglim-web/
├─ pages/
│  ├─ _app.js        → Importa styles/globals.css para toda la app
│  └─ index.js        → Toda la interfaz: Hero, Presentación, Beneficios y Footer
├─ styles/
│  └─ globals.css     → Todos los estilos del sitio
├─ public/
│  ├─ images/          → Aquí van logo.jpg, la imagen de presentación, etc.
│  └─ videos/          → Aquí van el video de fondo del Hero y el video vertical
├─ package.json
└─ next.config.js
```

## Cómo correrlo localmente

Necesitas tener Node.js instalado (v18 o superior recomendado).

```bash
npm install
npm run dev
```

Luego abre http://localhost:3000 en tu navegador.

Para generar la versión de producción:

```bash
npm run build
npm run start
```

## Dónde colocar tus archivos multimedia

El diseño referencia 4 imágenes y 2 videos que **debes agregar tú** (no venían adjuntos
en la conversación, solo la captura de referencia del diseño):

| Archivo esperado                          | Carpeta            | Dónde se usa                                   |
|--------------------------------------------|---------------------|------------------------------------------------|
| `logo.jpg`                                 | `public/images/`    | Logo en el navbar (arriba a la izquierda)      |
| `hero-poster.jpg` *(opcional)*             | `public/images/`    | Imagen de carga del video del Hero             |
| `reverglim-presentation.jpg`               | `public/images/`    | Imagen de la sección "Nosotros"                |
| `vertical-poster.jpg` *(opcional)*         | `public/images/`    | Imagen de carga del video vertical              |
| `hero-background.mp4`                      | `public/videos/`    | Video de fondo del Hero (loop, sin sonido)      |
| `vertical-showcase.mp4`                    | `public/videos/`    | Video vertical de la sección Beneficios (loop)  |

Cada carpeta trae un archivo `.md` con estas mismas instrucciones. Si prefieres usar
enlaces externos para los videos en vez de guardarlos en `public/videos`, simplemente
reemplaza el `src` de las etiquetas `<source>` en `pages/index.js` por la URL completa.

## Notas de implementación

- **Hero**: video de fondo en loop (`autoPlay`, `muted`, `loop`, `playsInline` — requisitos
  para que los navegadores permitan el autoplay), con overlay oscuro para que el texto
  sea legible, navbar que se vuelve sólida al hacer scroll (`useEffect` + `useState`).
- **Menú móvil**: los 9 enlaces de navegación colapsan en un botón hamburguesa por debajo
  de 860px de ancho (`useState` controla si está abierto).
- **Sección "Nosotros"**: imagen a la izquierda + una "píldora" con el texto REVERGLIM y
  el texto de presentación a la derecha.
- **Beneficios**: lista numerada de los 7 beneficios + video vertical en loop al costado.
- **Footer**: tarjeta oscura con bordes redondeados y sombra pronunciada para lograr el
  efecto "flotante", con las 3 columnas de información (Reverglim, Contacto, Enlaces
  rápidos) y el copyright debajo.
- **Animaciones de entrada**: un `IntersectionObserver` (dentro de `useEffect`, guardado
  con `useRef`) agrega una clase `is-visible` cuando cada bloque entra en pantalla,
  guiado por estado de React (no se manipula el DOM directamente) para evitar conflictos
  con los re-renders.
- Los enlaces de navegación **MISIÓN, VISIÓN, STICKERS, INVERTIR, ANUNCIARME y EMPRESA**
  quedaron como anclas `#` (placeholders), ya que el diseño compartido no incluía el
  contenido de esas secciones/páginas. Puedes crearlas como nuevas rutas de Next.js
  (por ejemplo `pages/mision.js`) y actualizar su `href` en `NAV_LINKS` dentro de
  `pages/index.js`.
- Los badges de "Google Play" / "Apple Store" son componentes propios (no las imágenes
  oficiales). Te recomiendo sustituirlos por los badges oficiales de cada tienda
  siguiendo sus lineamientos de marca antes de publicar el sitio.
