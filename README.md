# Portafolio — Juan Manuel Alvarado Pallares

Sitio personal de **Juan Manuel Alvarado Pallares**, Data Analyst Jr. & Data Scientist Jr., con perfil, experiencia, educación y proyectos reales de análisis de datos y machine learning.

🔗 **Sitio publicado:** [juanma-alvarado.github.io/PortafolioWeb](https://juanma-alvarado.github.io/PortafolioWeb/)

## Capturas

| Desktop | Mobile |
|---|---|
| ![Hero desktop](screenshots/hero-desktop.png) | ![Hero mobile](screenshots/hero-mobile.png) |

<details>
<summary>Ver la página completa</summary>

![Página completa](screenshots/full-page-desktop.png)

</details>

## Tecnologías

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) — SPA de una sola página con navegación por anclas.
- CSS plano con *custom properties* (sin frameworks de CSS) — paleta dark con acentos azules, tipografía Sora (títulos) + Inter (cuerpo), JetBrains Mono solo en detalles pequeños.
- [Boxicons](https://boxicons.com/) para iconografía.
- Sin backend: contacto vía enlaces reales (`mailto:`, GitHub, LinkedIn) y descarga directa del CV.

## Estructura

```
├── index.html          # entry point de Vite
├── src/
│   ├── components/      # Sidebar, About, Skills, Experience, Education, Projects, ExtraProjects, Contact, Footer
│   ├── data/content.js  # todo el contenido (perfil, experiencia, educación, skills, proyectos)
│   ├── styles/index.css # tema visual (variables de color, tipografía, layout)
│   └── hooks/useReveal.js
├── public/              # assets estáticos (imagen de perfil, CV, mini-proyectos viejos)
└── docs/                 # ⚠️ carpeta GENERADA por `npm run build` — no editar a mano, la sirve GitHub Pages
```

## Correr en local

Requiere Node.js 18+.

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/PortafolioWeb/`.

## Build y despliegue

El sitio se publica con **GitHub Pages** sirviendo la carpeta `docs/` de la rama `master`. No hay CI: el build se genera y se commitea a mano.

```bash
npm run build   # genera/sobreescribe docs/
git add docs
git commit -m "build: actualizar sitio publicado"
git push
```

## Otros experimentos

La sección "Playground" del sitio enlaza 3 mini-proyectos previos guardados en `public/proyectos/`: un juego de Snake, un Tic-Tac-Toe en CSS puro y un clon estático de Google — se conservan como piezas de práctica, separadas de los proyectos principales.
