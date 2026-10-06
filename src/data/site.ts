// ==========================================================
// Conéctate · datos del sitio
// Edita aquí la información de contacto, horarios y contenidos.
// ==========================================================

export const site = {
  name: "Conéctate",
  tagline: "Centro Integral del Desarrollo Infantil",
  description:
    "Conéctate, Centro Integral del Desarrollo Infantil. Psicología, terapia de lenguaje, de aprendizaje y ocupacional, integración sensorial, lectoescritura y crianza positiva para niños, niñas y sus familias, con la Lic. Pamela Valdez Hijar y su equipo.",

  // WhatsApp: código de país + número, sin espacios ni "+"
  whatsapp: "51936108611",
  phoneDisplay: "+51 936 108 611",
  address: "Av. Brigida Silva de Ochoa 239 - Jardines de la Marina",
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
export type IconName =
  | "smile" | "puzzle" | "speech" | "hand" | "book"
  | "target" | "star" | "sparkle" | "pencil" | "family" | "heart" | "search";

export type Service = {
  id: string;
  name: string;
  icon: IconName;
  color: Color;
  intro: string;
  focusTitle?: string; // por defecto: "¿Qué trabajamos?"
  focus: string[];
  note?: string;
};

export const services: Service[] = [
  {
    id: "psicologia",
    name: "Psicología",
    icon: "smile",
    color: "pink",
    intro:
      "Brindamos acompañamiento psicológico orientado al desarrollo socioemocional y conductual de niños y adolescentes.",
    focus: [
      "Regulación emocional",
      "Autoestima",
      "Habilidades sociales",
      "Adaptación",
      "Manejo de situaciones de cambio",
      "Estrategias para afrontar dificultades",
    ],
  },
  {
    id: "aprendizaje",
    name: "Terapia de aprendizaje",
    icon: "puzzle",
    color: "purple",
    intro:
      "Intervención especializada orientada a identificar y fortalecer los procesos cognitivos y habilidades que intervienen en el aprendizaje.",
    focus: [
      "Lectura",
      "Escritura",
      "Razonamiento matemático",
      "Comprensión",
      "Memoria",
      "Atención",
      "Funciones ejecutivas",
      "Estrategias de aprendizaje",
    ],
    note: "Trabajamos de manera individualizada, considerando el perfil y ritmo de cada estudiante.",
  },
  {
    id: "lenguaje",
    name: "Terapia de lenguaje",
    icon: "speech",
    color: "orange",
    intro:
      "Intervención especializada dirigida al desarrollo y fortalecimiento de las habilidades comunicativas.",
    focus: [
      "Lenguaje comprensivo",
      "Lenguaje expresivo",
      "Comunicación funcional",
      "Vocabulario",
      "Estructuración de frases",
      "Habilidades pragmáticas",
    ],
    note: "Además de otros aspectos relacionados con la comunicación.",
  },
  {
    id: "ocupacional",
    name: "Terapia ocupacional",
    icon: "hand",
    color: "teal",
    intro:
      "Favorecemos el desarrollo de habilidades necesarias para una participación funcional y autónoma en las actividades de la vida diaria, el juego y el entorno escolar.",
    focus: ["Habilidades motoras", "Coordinación", "Planificación", "Autonomía", "Desempeño ocupacional"],
    note: "Según las necesidades individuales de cada niño.",
  },
  {
    id: "apoyo-escolar",
    name: "Aprendizaje y apoyo escolar",
    icon: "book",
    color: "pink",
    intro:
      "Acompañamiento especializado para fortalecer los procesos de aprendizaje y responder a las necesidades educativas particulares de cada estudiante.",
    focus: [
      "Comprensión",
      "Razonamiento",
      "Memoria",
      "Funciones ejecutivas",
      "Resolución de problemas",
      "Estrategias de aprendizaje",
    ],
  },
  {
    id: "atencion",
    name: "Atención y concentración",
    icon: "target",
    color: "purple",
    intro:
      "Intervención orientada al fortalecimiento de los procesos atencionales y funciones cognitivas implicadas en el aprendizaje.",
    focus: [
      "Atención sostenida",
      "Atención selectiva",
      "Memoria de trabajo",
      "Control inhibitorio",
      "Flexibilidad cognitiva",
      "Planificación",
      "Seguimiento de instrucciones",
    ],
  },
  {
    id: "conductual",
    name: "Intervención conductual",
    icon: "star",
    color: "orange",
    intro:
      "Diseñamos estrategias de intervención dirigidas a favorecer conductas funcionales y habilidades de autorregulación.",
    focus: [
      "Seguimiento de normas",
      "Control de impulsos",
      "Tolerancia a la frustración",
      "Adaptación a cambios",
      "Habilidades sociales",
      "Respeto de límites y espacios",
    ],
  },
  {
    id: "sensorial",
    name: "Integración sensorial",
    icon: "sparkle",
    color: "teal",
    intro:
      "Intervención orientada a favorecer el procesamiento y la organización de la información sensorial, buscando una respuesta más adecuada frente a las demandas del entorno.",
    focusTitle: "Aspectos que consideramos",
    focus: ["Regulación", "Planificación motora", "Respuestas sensoriales", "Participación en actividades cotidianas"],
  },
  {
    id: "lectoescritura",
    name: "Programa de lectoescritura",
    icon: "pencil",
    color: "pink",
    intro:
      "Programa especializado para desarrollar y fortalecer las habilidades precursoras y los procesos implicados en la adquisición de la lectura y escritura.",
    focus: [
      "Conciencia fonológica",
      "Correspondencia grafema-fonema",
      "Decodificación",
      "Fluidez",
      "Comprensión lectora",
      "Escritura y producción escrita",
    ],
    note: "De acuerdo con el nivel de desarrollo de cada niño.",
  },
  {
    id: "crianza",
    name: "Crianza positiva",
    icon: "family",
    color: "purple",
    intro:
      "Orientación dirigida a madres, padres y cuidadores para favorecer prácticas de crianza respetuosas, consistentes y acordes con las necesidades del desarrollo infantil.",
    focusTitle: "Te brindamos estrategias para",
    focus: [
      "Establecimiento de límites",
      "Acompañamiento emocional",
      "Manejo de conductas",
      "Fortalecimiento del vínculo familiar",
    ],
  },
];

export type Evaluation = {
  id: string;
  name: string;
  icon: IconName;
  color: Color;
  age: string;
  intro: string;
  listTitle: string;
  list: string[];
  details: { title: string; text: string }[]; // se muestran en "Ver más detalles"
};

export const evaluations: Evaluation[] = [
  {
    id: "eval-lenguaje",
    name: "Evaluación de Lenguaje",
    icon: "speech",
    color: "pink",
    age: "Desde los 3 años",
    intro:
      "Permite conocer cómo se está desarrollando la comunicación del niño y detectar posibles dificultades que puedan interferir en su interacción, aprendizaje y desempeño escolar.",
    listTitle: "¿Qué evaluamos?",
    list: [
      "Comprensión del lenguaje",
      "Expresión verbal y formación de oraciones",
      "Vocabulario y denominación",
      "Pronunciación y articulación de sonidos",
      "Habilidades comunicativas y uso funcional del lenguaje",
      "Comprensión y seguimiento de instrucciones",
      "Narración y organización del discurso, según la edad",
    ],
    details: [
      {
        title: "¿Qué instrumentos podemos utilizar?",
        text: "Se seleccionan de acuerdo con la edad y motivo de consulta. Podemos utilizar pruebas estandarizadas de lenguaje, pruebas de vocabulario y comprensión, registros de lenguaje espontáneo, observación clínica y actividades estructuradas.",
      },
      {
        title: "¿Qué podemos identificar?",
        text: "Dificultades en comprensión o expresión, vocabulario reducido, problemas de articulación, dificultades para seguir instrucciones, organizar ideas o comunicarse adecuadamente según la edad.",
      },
      {
        title: "¿Por qué evaluar?",
        text: "Una detección temprana permite intervenir oportunamente y favorecer la comunicación, la interacción social y el aprendizaje.",
      },
    ],
  },
  {
    id: "eval-aprendizaje",
    name: "Evaluación de Aprendizaje",
    icon: "book",
    color: "purple",
    age: "Desde los 3 años",
    intro:
      "Permite conocer cómo aprende el niño, cuáles son sus fortalezas y qué habilidades necesitan mayor acompañamiento. En edades tempranas se valoran principalmente las habilidades precursoras del aprendizaje.",
    listTitle: "¿Qué evaluamos?",
    list: [
      "Atención y concentración",
      "Memoria",
      "Percepción visual y auditiva",
      "Razonamiento y resolución de problemas",
      "Habilidades cognitivas",
      "Conciencia fonológica",
      "Habilidades prelectoras y preescritoras",
      "Grafomotricidad",
      "Lectura, escritura y comprensión, según la edad",
      "Nociones lógico-matemáticas",
    ],
    details: [
      {
        title: "¿Qué instrumentos podemos utilizar?",
        text: "Pruebas estandarizadas de habilidades cognitivas y de aprendizaje, pruebas de atención y memoria, instrumentos de lectoescritura y matemática, listas de cotejo, actividades pedagógicas estructuradas y observación del desempeño.",
      },
      {
        title: "¿Qué podemos identificar?",
        text: "Dificultades en atención, memoria, razonamiento, lectoescritura, comprensión, habilidades matemáticas o procesos cognitivos que pueden estar interfiriendo en el rendimiento escolar.",
      },
      {
        title: "¿Por qué evaluar?",
        text: "Permite conocer cómo aprende cada niño y diseñar estrategias de intervención acordes con sus necesidades, evitando esperar a que las dificultades se hagan mayores.",
      },
    ],
  },
  {
    id: "eval-ocupacional",
    name: "Evaluación Ocupacional",
    icon: "puzzle",
    color: "orange",
    age: "Desde los 3 años",
    intro:
      "Permite conocer cómo el niño se desenvuelve en sus actividades cotidianas y cómo sus habilidades sensoriales, motoras, cognitivas y de autonomía influyen en su participación en casa, colegio y otros entornos.",
    listTitle: "¿Qué evaluamos?",
    list: [
      "Motricidad fina y gruesa",
      "Coordinación y planificación motora",
      "Coordinación óculo-manual",
      "Grafomotricidad",
      "Habilidades sensoriales y procesamiento de estímulos",
      "Esquema corporal y orientación espacial",
      "Autonomía en actividades de la vida diaria",
      "Juego y participación",
      "Atención y organización durante las actividades",
    ],
    details: [
      {
        title: "¿Qué instrumentos podemos utilizar?",
        text: "Cuestionarios y escalas de desempeño, pruebas de desarrollo motor y habilidades perceptivo-motoras, actividades de motricidad fina y gruesa, observación clínica y evaluación funcional.",
      },
      {
        title: "¿Qué podemos identificar?",
        text: "Dificultades en procesamiento sensorial, coordinación, motricidad, planificación motora, grafomotricidad, autonomía o participación en actividades cotidianas.",
      },
      {
        title: "¿Por qué evaluar?",
        text: "Porque algunas dificultades que parecen únicamente conductuales o académicas pueden estar relacionadas con la forma en que el niño procesa y responde a los estímulos de su entorno.",
      },
    ],
  },
  {
    id: "eval-integral",
    name: "Evaluación Integral",
    icon: "search",
    color: "teal",
    age: "Desde los 3 años",
    intro:
      "Es una evaluación amplia que permite observar al niño desde diferentes áreas para obtener una visión global de su desarrollo y funcionamiento.",
    listTitle: "¿Qué áreas podemos valorar?",
    list: [
      "Lenguaje y comunicación",
      "Aprendizaje",
      "Atención y concentración",
      "Funciones ejecutivas",
      "Habilidades cognitivas",
      "Área conductual y socioemocional",
      "Habilidades perceptivas y motoras",
      "Autonomía y desempeño funcional",
      "Habilidades sociales",
    ],
    details: [],
  },
];

export type TeamMember = {
  name: string;
  role: string; // especialidad que se muestra en la etiqueta
  color: Color;
  photo?: string; // ruta en public/, p. ej. "/img/equipo/ana.jpg". Si no hay, se muestran las iniciales
  bio: string;
  highlights: string[]; // formación, experiencia, logros
};

// EJEMPLOS: reemplazar con los datos reales de cada especialista
export const team: TeamMember[] = [
  {
    name: "Nombre Apellido",
    role: "Terapia de Lenguaje",
    color: "pink",
    bio: "Breve presentación del especialista: su enfoque de trabajo, con qué edades atiende y qué lo apasiona de acompañar a los niños y sus familias.",
    highlights: [
      "Licenciatura en Tecnología Médica – Terapia de Lenguaje",
      "X años de experiencia en terapia infantil",
      "Formación en trastornos del habla y la comunicación",
    ],
  },
  {
    name: "Nombre Apellido",
    role: "Psicología Infantil",
    color: "purple",
    bio: "Breve presentación del especialista: su enfoque de trabajo, con qué edades atiende y qué lo apasiona de acompañar a los niños y sus familias.",
    highlights: [
      "Licenciatura en Psicología",
      "X años de experiencia en evaluación e intervención infantil",
      "Especialización en desarrollo emocional y conductual",
    ],
  },
  {
    name: "Nombre Apellido",
    role: "Terapia Ocupacional",
    color: "orange",
    bio: "Breve presentación del especialista: su enfoque de trabajo, con qué edades atiende y qué lo apasiona de acompañar a los niños y sus familias.",
    highlights: [
      "Licenciatura en Tecnología Médica – Terapia Ocupacional",
      "X años de experiencia en integración sensorial",
      "Trabajo en autonomía y habilidades de la vida diaria",
    ],
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
  { title: "Orientación", text: "Conversamos sobre lo que has observado, resolvemos tus dudas y te recomendamos la evaluación o el servicio más adecuado." },
  { title: "Evaluación inicial", text: "Conocemos a tu hijo a través del juego y conversamos con la familia sobre su historia." },
  { title: "Plan personalizado", text: "Definimos objetivos claros y la frecuencia de sesiones según sus necesidades." },
  { title: "Seguimiento en familia", text: "Te damos pautas para casa y revisamos juntos los avances de forma periódica." },
];

export const values = [
  { value: "1 a 1", label: "Sesiones individuales" },
  { value: String(services.length), label: "Áreas de especialidad" }, // se actualiza solo según los servicios
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
