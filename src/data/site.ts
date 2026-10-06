// ==========================================================
// Conéctate · datos del sitio
// Edita aquí la información de contacto, horarios y contenidos.
// ==========================================================

export const site = {
  name: "Conéctate",
  tagline: "Centro Integral del Desarrollo Infantil",
  description:
    "Conéctate, Centro Integral del Desarrollo Infantil. Terapia de lenguaje, educación especial y abordaje conductual para niños y niñas, con la Lic. Pamela Valdez Hijar.",

  // WhatsApp: código de país + número, sin espacios ni "+"
  whatsapp: "51900000000",
  phoneDisplay: "+51 900 000 000",
  address: "Lima, Perú (dirección por confirmar)",
  city: "Lima, Perú",
  instagram: { user: "@centrointegral_conectate", url: "https://www.instagram.com/centrointegral_conectate/" },

  hours: [
    { days: "Lun – Vie", time: "9:00 a.m. – 7:00 p.m.", short: "9 a.m. – 7 p.m." },
    { days: "Sábados", time: "9:00 a.m. – 1:00 p.m.", short: "9 a.m. – 1 p.m." },
    { days: "Domingos", time: "Cerrado", short: "Cerrado" },
  ],
};

export const messages = {
  general: "¡Hola! Vi su página web y quisiera más información sobre Conéctate.",
  orientation: "¡Hola! Noté algunas señales en mi hijo/a y quisiera orientación. ¿Me podrían ayudar?",
  booking: "¡Hola! Quisiera agendar una cita en Conéctate.",
};

export type Color = "pink" | "purple" | "orange" | "teal";
export type IconName = "speech" | "puzzle" | "heart" | "family";

export const services: {
  id: string;
  name: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
  chips: [string, string, string];
  color: Color;
  icon: IconName;
  featured: boolean;
}[] = [
  {
    id: "lenguaje",
    name: "Terapia de lenguaje",
    title: "Terapia de lenguaje",
    summary:
      "Estimulamos el habla, la comprensión y la comunicación para que tu hijo exprese lo que siente y piensa.",
    description:
      "Ayudamos a tu peque a comunicarse mejor: desde sus primeras palabras hasta una conversación fluida, trabajando de forma lúdica y con objetivos claros.",
    bullets: [
      "Retraso en la aparición del habla",
      "Dificultades de pronunciación (dislalias)",
      "Comprensión y expresión del lenguaje",
      "Comunicación aumentativa y alternativa",
    ],
    chips: ["ba · ba", "¡agua!", "🗣️"],
    color: "pink",
    icon: "speech",
    featured: true,
  },
  {
    id: "aprendizaje",
    name: "Educación especial",
    title: "Educación especial y aprendizaje",
    summary:
      "Acompañamos el aprendizaje respetando su ritmo, con estrategias adaptadas a sus necesidades.",
    description:
      "Acompañamos a niños y niñas con necesidades educativas especiales para potenciar sus habilidades y su autonomía, en coordinación con su nido o colegio.",
    bullets: [
      "Discapacidad intelectual y retraso en el desarrollo",
      "Dificultades de atención y aprendizaje",
      "Lectoescritura y cálculo",
      "Adaptaciones y orientación escolar",
    ],
    chips: ["A B C", "1 + 2", "✏️"],
    color: "purple",
    icon: "puzzle",
    featured: true,
  },
  {
    id: "conductual",
    name: "Área conductual",
    title: "Área conductual",
    summary:
      "Trabajamos la regulación emocional, la conducta y las habilidades sociales en casa y en el cole.",
    description:
      "Brindamos herramientas para entender y acompañar la conducta de tu hijo, favoreciendo su regulación emocional y la convivencia en casa y en el aula.",
    bullets: [
      "Rabietas y dificultad para manejar emociones",
      "Rutinas, normas y límites",
      "Habilidades sociales y de juego",
      "Acompañamiento en condiciones del neurodesarrollo (TEA, TDAH)",
    ],
    chips: ["😊", "¡lo logré!", "⭐"],
    color: "orange",
    icon: "heart",
    featured: true,
  },
  {
    id: "familia",
    name: "Orientación a padres",
    title: "Orientación a padres",
    summary: "Pautas para que el avance de la terapia continúe en casa.",
    description:
      "La familia es parte del equipo. Te guiamos con pautas sencillas para que el avance de la terapia continúe en casa, en el día a día.",
    bullets: [
      "Pautas de estimulación en casa",
      "Reuniones de avance y seguimiento",
      "Coordinación con el nido o colegio",
      "Resolución de dudas y acompañamiento",
    ],
    chips: ["🏡", "en equipo", "💬"],
    color: "teal",
    icon: "family",
    featured: false,
  },
];

export const credentials = [
  "Lic. en Educación Especial",
  "Especialidad en Retardo Mental",
  "Especialización en Lenguaje",
  "Especialización en el Área Conductual",
];

export const signals = [
  "A los 2 años dice muy pocas palabras o no forma frases cortas.",
  "Le cuesta entender o seguir indicaciones sencillas.",
  "Su forma de hablar es difícil de entender para otras personas.",
  "Tiene rabietas muy frecuentes o intensas que cuesta calmar.",
  "Evita el contacto visual o prefiere jugar siempre solo.",
  "Presenta dificultades para aprender a leer, escribir o concentrarse.",
];

export const steps = [
  { title: "Nos escribes", text: "Cuéntanos por WhatsApp o con el formulario qué te preocupa y la edad de tu peque." },
  { title: "Evaluación inicial", text: "Conocemos a tu hijo a través del juego y conversamos con la familia sobre su historia." },
  { title: "Plan personalizado", text: "Definimos objetivos claros y la frecuencia de sesiones según sus necesidades." },
  { title: "Seguimiento en familia", text: "Te damos pautas para casa y revisamos juntos los avances de forma periódica." },
];

export const values = [
  { value: "1 a 1", label: "Sesiones individuales" },
  { value: "3", label: "Áreas de especialidad" },
  { value: "100%", label: "Planes personalizados" },
  { value: "❤", label: "La familia en el equipo" },
];

export const ages = [
  "Menos de 2 años",
  "2 a 3 años",
  "4 a 5 años",
  "6 a 8 años",
  "9 a 12 años",
  "Más de 12 años",
];

export const shifts = ["Mañana", "Tarde", "Sábado"];

export const faqs = [
  {
    q: "¿Desde qué edad pueden atender a mi hijo?",
    a: "Atendemos desde la primera infancia. Mientras más temprano se detecte una dificultad, mejores resultados se logran. Escríbenos y te orientamos según su edad.",
  },
  {
    q: "¿Necesito un diagnóstico o una orden médica?",
    a: "No es necesario. Si ya cuentas con informes de otros especialistas, tráelos a la evaluación inicial; nos ayudan a conocer mejor a tu peque.",
  },
  {
    q: "¿Cuánto dura cada sesión y cuántas veces por semana?",
    a: "Depende de cada caso. Luego de la evaluación te proponemos un plan con la frecuencia y duración recomendadas.",
  },
  {
    q: "¿Puedo estar presente en las sesiones?",
    a: "Sí, la participación de la familia es clave. Coordinaremos contigo los momentos en que tu presencia sume más al proceso.",
  },
  {
    q: "¿Cuál es el costo de la evaluación?",
    a: "Escríbenos por WhatsApp y te compartimos las tarifas vigentes y la disponibilidad de horarios.",
  },
];
