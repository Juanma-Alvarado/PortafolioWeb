# Portafolio — Juan Manuel Alvarado Pallares

> *"Encuentro, en millones de clics, la señal que anticipa una compra antes de que pase."*

Un CV en PDF no hace scroll, no tiene glow y no puede mostrar un modelo con ROC-AUC de 0,938 corriendo en un demo. Por eso construí este sitio: un lugar donde mis proyectos de datos reales, mi formación y mi forma de resolver problemas se puedan explorar en un par de minutos, en vez de leerse en una hoja de papel.

🔗 **Sitio publicado:** [juanma-alvarado.github.io/PortafolioWeb](https://juanma-alvarado.github.io/PortafolioWeb/)

## Tabla de contenidos

- [¿Por qué este proyecto?](#por-qué-este-proyecto)
- [Capturas](#capturas)
- [Características principales](#características-principales)
- [Correr en local](#correr-en-local)
- [El proceso](#el-proceso)
- [Estructura](#estructura)
- [Recursos útiles](#recursos-útiles)
- [Licencia](#licencia)
- [Autor](#autor)

## ¿Por qué este proyecto?

Soy Data Analyst Jr. y Data Scientist Jr., y como casi todo junior, mi mejor argumento no es la experiencia sino la evidencia: proyectos terminados, métricas reales, código que corre. Necesitaba un espacio propio para mostrar eso sin depender de la plantilla de un PDF ni de un perfil de LinkedIn que compite con miles de perfiles iguales.

Quería que quien entrara pudiera responder rápido tres preguntas: *¿qué sabe hacer?*, *¿con qué herramientas?* y *¿tiene algo real detrás?* — sin scrollear infinito ni leer un muro de texto. De ahí salieron las decisiones de diseño: un proyecto destacado con métricas en vez de una lista genérica, chips en vez de párrafos de tecnologías, y una sola pantalla de entrada que resume quién soy en cinco segundos.

## Capturas

| Desktop | Mobile |
|---|---|
| ![Hero desktop](screenshots/hero-desktop.png) | ![Hero mobile](screenshots/hero-mobile.png) |

<details>
<summary>Ver la página completa</summary>

![Página completa](screenshots/full-page-desktop.png)

</details>

## Características principales

- **Un proyecto, no una lista.** El proyecto más relevante (predicción de intención de compra en e-commerce) aparece destacado con sus métricas reales — ROC-AUC 0,938, F1 0,690 — y sus decisiones técnicas, no solo el nombre del repo.
- **Cero contenido de relleno.** Cada dato viene del CV real: formación, stack, logros. Nada de *lorem ipsum* ni placeholders.
- **Diseño propio, no una plantilla.** Sistema visual construido a mano: glow azul ambiental, glassmorphism sutil, tipografía [Onest](https://fonts.google.com/specimen/Onest) y una paleta pensada para no saturar.
- **Navegación flotante centrada** que seduce y resalta la sección activa mientras se scrollea.
- **Accesos directos de verdad.** Descargar CV, escribir por mail, LinkedIn y GitHub están a un clic desde la primera pantalla — sin formularios de contacto que nadie revisa.
- **Responsive de punta a punta**, con animaciones de entrada sutiles que no distraen del contenido.
- **Playground.** Tres mini-proyectos de práctica (Snake, Tic-Tac-Toe, clon de Google) conservados aparte, como bitácora de aprendizaje.

## Correr en local

Requiere Node.js 18+.

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/PortafolioWeb/`.

## El proceso

Este sitio no nació así. Empezó como un layout de sidebar fijo con foto circular, pasó por un rediseño visual inspirado en la estética editorial de [librosgratis.dev](https://librosgratis.dev/) (glows, tipografía serif, glassmorphism), y terminó reestructurado a un layout vertical de una sola columna con nav flotante, tomando como referencia directa la organización de [porfolio.dev](https://porfolio.dev/). Cada iteración se probó en pantalla real antes de darla por buena — no hay cambio de diseño en este repo que no se haya visto correr en un navegador primero.

**Decisiones de stack:**

- **React + Vite**, sin meta-framework: es un sitio estático de una sola página, no necesita SSR ni routing.
- **CSS plano con custom properties**, sin Tailwind ni librerías de componentes — todo el sistema de color, tipografía y espaciado vive en variables reutilizables en `src/styles/index.css`.
- **Sin backend ni formularios**: el contacto son enlaces reales (`mailto:`, GitHub, LinkedIn) y una descarga directa del CV. Menos piezas que puedan romperse.

## Estructura

```
├── index.html          # entry point de Vite
├── src/
│   ├── components/      # Header (nav flotante), Hero, Projects, Education, Skills, ExtraProjects, Footer, Loader
│   ├── data/content.js  # todo el contenido (perfil, experiencia, educación, skills, proyectos)
│   ├── styles/index.css # tema visual (variables de color, tipografía, layout)
│   └── hooks/useReveal.js
├── public/              # assets estáticos (imagen de perfil, CV, mini-proyectos viejos)
└── docs/                 # ⚠️ carpeta GENERADA por `npm run build` — no editar a mano, la sirve GitHub Pages
```

### Build y despliegue

El sitio se publica con **GitHub Pages** sirviendo la carpeta `docs/` de la rama `master`. No hay CI: el build se genera y se commitea a mano.

```bash
npm run build   # genera/sobreescribe docs/
git add docs
git commit -m "build: actualizar sitio publicado"
git push
```

## Recursos útiles

- [React](https://react.dev/) y [Vite](https://vitejs.dev/) — documentación oficial.
- [Boxicons](https://boxicons.com/) — iconografía usada en toda la interfaz.
- [Onest](https://fonts.google.com/specimen/Onest) — la tipografía variable del sitio.
- [porfolio.dev](https://porfolio.dev/) y [librosgratis.dev](https://librosgratis.dev/) — referencias de diseño que inspiraron la estructura y el sistema visual.
- Iteraciones de diseño y refactor hechas en pareja con [Claude Code](https://claude.com/claude-code).

## Licencia

El código de este repositorio se distribuye bajo licencia **MIT** — usalo, adaptalo, aprendé de él. El contenido personal (foto, CV, biografía, proyectos descritos) no está cubierto por la licencia y sigue siendo propiedad de su autor.

## Autor

**Juan Manuel Alvarado Pallares** — Data Analyst Jr. & Data Scientist Jr., Córdoba, Colombia.

[GitHub](https://github.com/Juanma-Alvarado) · [LinkedIn](https://www.linkedin.com/in/juanma-alvarado/)
