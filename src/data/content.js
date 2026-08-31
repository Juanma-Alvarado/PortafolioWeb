// Todos los datos de este archivo provienen del CV real del usuario
// ("Juan Alvarado - CV - Data Analyst Jr.pdf") y de la API pública de GitHub.

import { withBase } from "../utils/url";

export const profile = {
  name: "Juan Manuel Alvarado Pallares",
  shortName: "Juan Ma",
  title: "Data Analyst Jr. & Data Scientist Jr.",
  location: "Córdoba, Colombia",
  email: "juanmanuel3alvarado@gmail.com",
  github: "https://github.com/Juanma-Alvarado",
  linkedin: "https://www.linkedin.com/in/juanma-alvarado/",
  cvUrl: withBase("/cv/Juan-Manuel-Alvarado-CV.pdf"),
  // Gancho corto para el hero/sidebar — no repite el texto de "about".
  hook:
    "Encuentro, en millones de clics, la señal que anticipa una compra antes de que pase.",
  // Narrativa más larga para la sección About — mismos hechos reales del CV, otro tono.
  about:
    "Soy Juan Manuel, Data Analyst Jr. y Data Scientist Jr. en Córdoba, Colombia. Me metí en datos porque me engancha encontrar el patrón que nadie está mirando: en mi proyecto más reciente ayudé a construir un modelo que predice qué sesiones de un e-commerce realmente terminan en compra —con un ROC-AUC de 0,94— para que el presupuesto de marketing deje de dispararse a ciegas. Trabajo con SQL, Python, Pandas, NumPy y Power BI, y sumo una base en finanzas y negocios internacionales de la Universidad de Córdoba, algo que me da una mirada de negocio a la hora de modelar. Sigo formándome y construyendo proyectos — estos son los que más orgullo me dan.",
};

export const skills = {
  técnicas: [
    "SQL",
    "Python",
    "Pandas",
    "NumPy",
    "Power BI",
    "FastAPI",
    "Docker",
    "Git / GitHub",
    "Scrum",
  ],
  blandas: ["Trabajo en equipo", "Comunicación"],
  idiomas: ["Español (nativo)", "Inglés (básico)"],
};

export const experience = [
  {
    project: "Metric Mindset — Predicción de Intención de Compra (E-commerce)",
    context: "Proyecto Final, Henry (equipo de 4)",
    role: "Data Scientist — modelado y feature engineering",
    date: "2026",
    stack: [
      "Python",
      "Scikit-learn",
      "LightGBM",
      "XGBoost",
      "CatBoost",
      "Optuna",
      "FastAPI",
      "Docker",
      "MLflow",
      "GitHub Actions",
    ],
    bullets: [
      "Alcancé un ROC-AUC de 0,938 y un F1 de 0,690 en la predicción de intención de compra, como resultado de entrenar y comparar cinco modelos de clasificación (Regresión Logística, Random Forest, XGBoost, LightGBM, CatBoost) sobre 12.330 sesiones de usuario, optimizando el modelo ganador (LightGBM) con Optuna y calibración sigmoide.",
      "Reduje el Brier Score del modelo en ~33% (probabilidades mejor calibradas), como resultado de aplicar SMOTE, ponderación de clases (class_weight) y calibración sigmoide (CalibratedClassifierCV), para corregir el desbalance de clases del dataset (84,5% / 15,5%).",
      "Garanticé la validez de las métricas reportadas, como resultado de un feature engineering cuidadoso y una separación estratificada train/test (80/20) en Python, para prevenir data leakage en el pipeline de modelado.",
      "Habilité la priorización de acciones comerciales (cross-selling y retención) sobre miles de sesiones de usuario, como resultado de diseñar una segmentación de intención de compra en tres niveles (alta, media, baja) a partir de las probabilidades del modelo.",
    ],
    repo: "https://github.com/lucasbottino9/Proyecto-Final-Henry",
  },
];

export const education = [
  {
    institution: "Universidad de Córdoba",
    place: "Córdoba, Colombia",
    degree: "Administración en Finanzas y Negocios Internacionales",
    date: "En curso",
    detail:
      "Cursé finanzas corporativas, comercio internacional y análisis financiero, desarrollando pensamiento analítico aplicado a la toma de decisiones de negocio.",
  },
  {
    institution: "Henry — Bootcamp en Ciencia de Datos",
    place: "Remoto",
    degree: "Graduado",
    date: "feb. 2026 – ago. 2026",
    detail:
      "Consolidé el ciclo de vida completo del dato (ingesta, ETL, modelado y despliegue) trabajando con SQL, Python, Pandas y NumPy. Desplegué un modelo de machine learning con FastAPI y Docker, e incorporé buenas prácticas de trabajo en equipo bajo metodología Scrum.",
  },
  {
    institution: "SENA — Técnico en Procesamiento de Datos",
    place: "Presencial",
    degree: "Graduado",
    date: "jul. 2024 – 2025",
    detail:
      "Desarrollé razonamiento matemático aplicado al análisis de datos y adquirí bases de Microsoft Power BI y Python para el procesamiento y la visualización de información.",
  },
];

export const projects = [
  {
    name: "Mlops_Pipeline",
    description: "Pipeline de machine learning.",
    stack: ["Python", "Jupyter Notebook", "MLOps"],
    repo: "https://github.com/Juanma-Alvarado/Mlops_Pipeline",
    demo: null,
  },
  {
    name: "MovieTime",
    description: "Busca tus películas favoritas 🎞️",
    stack: ["JavaScript", "CSS", "API REST"],
    repo: "https://github.com/Juanma-Alvarado/MovieTime",
    demo: "https://movietim.netlify.app/",
  },
  {
    name: "Proyecto-Final-Henry",
    description:
      "Sistema de recomendación inteligente para e-commerce que combina predicción de intención de compra con recomendaciones de productos personalizadas, usando Machine Learning, FastAPI, Streamlit y buenas prácticas de MLOps. Proyecto final en equipo (4 personas) del bootcamp de Ciencia de Datos de Henry.",
    stack: ["Python", "Scikit-learn", "LightGBM", "FastAPI", "Streamlit", "MLOps"],
    repo: "https://github.com/lucasbottino9/Proyecto-Final-Henry",
    demo: null,
    team: true,
  },
];

export const extraProjects = [
  {
    name: "Snake",
    description: "Juego de la serpiente hecho con Canvas y JavaScript puro.",
    thumb: withBase("/proyectos/thumbs/p1.png"),
    url: withBase("/proyectos/p1-snake/index.html"),
  },
  {
    name: "Tic-Tac-Toe",
    description: "Tres en raya con el clásico truco de radio-inputs en CSS puro.",
    thumb: withBase("/proyectos/thumbs/p3.png"),
    url: withBase("/proyectos/p3-tictactoe/index.html"),
  },
  {
    name: "Google Clon",
    description: "Clon estático de la página principal de Google.",
    thumb: withBase("/proyectos/thumbs/google-clon.png"),
    url: withBase("/proyectos/google-clon/index.html"),
  },
];
