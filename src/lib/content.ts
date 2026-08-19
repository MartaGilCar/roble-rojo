export const navigation = [
  { label: "Experiencias", href: "#portfolio" },
  { label: "Sobre mi", href: "#philosophy" },
  { label: "Contacto", href: "#contact" },
];

export const heroHighlights = [
  "Retratos íntimos",
  "Sesiones de familia",
  "Branding personal",
];

export const experiences = [
  {
    title: "Mujeres",
    description: "Retratos íntimos que celebran la presencia, la calma y la autenticidad.",
    image: "/ellas.avif",
    alt: "Retrato de mujer en naturaleza — Roble Rojo",
  },
  {
    title: "Familia",
    description: "Sesiones pensadas para capturar vínculos, risas y momentos naturales en conjunto.",
    image: "/nature.avif",
    alt: "Sesión familiar en Cantabria — Roble Rojo",
  },
  {
    title: "Marca personal",
    description: "Fotografía con intención editorial para visibilizar tu propuesta única.",
    image: "/paloma2.avif",
    alt: "Fotografía de marca personal — Roble Rojo",
  },
];

export const portfolioItems = [
  {
    title: "Retrato",
    category: "Expresiones auténticas y sensaciones genuinas.",
    image: "/polma3.avif",
    alt: "Retrato editorial en Cantabria — Roble Rojo",
  },
  {
    title: "Piedra",
    category: "Sesiones para reconectar con la propia esencia y la calma.",
    image: "/tercera_0034.avif",
    alt: "Sesión en entorno natural con piedra — Cantabria",
  },
  {
    title: "Ella",
    category: "Retratos íntimos con luz suave y emocional.",
    image: "/ellas.avif",
    alt: "Retrato íntimo con luz suave — Cantabria",
  },
  {
    title: "Naturaleza",
    category: "Imágenes en tonos cálidos para capturar momentos espontáneos.",
    image: "/nature.avif",
    alt: "Sesión en naturaleza en Cantabria — Roble Rojo",
  },
  {
    title: "Paloma",
    category: "Retratos que muestran presencia y fuerza.",
    image: "/paloma.avif",
    alt: "Retrato editorial de Paloma — Roble Rojo",
  },
  {
    title: "Paloma 2",
    category: "Una mirada serena y cercana en formato editorial.",
    image: "/paloma2.avif",
    alt: "Retrato editorial de Paloma — Roble Rojo",
  },
  {
    title: "Bosque",
    category: "Sesiones para reconectar con la propia esencia y la calma.",
    image: "/bosque.avif",
    alt: "Sesión en bosque de Cantabria — Roble Rojo",
  },
  {
    title: "Playa 1",
    category: "Sesiones junto al mar con luz natural y composición cuidada.",
    image: "/paulaplaya2_0006.avif",
    alt: "Sesión en playa de Cantabria — Roble Rojo",
  },
  {
    title: "Playa 2",
    category: "Atmósferas cálidas que celebran la libertad y el movimiento.",
    image: "/paulaplaya2_0009.avif",
    alt: "Sesión en playa con movimiento — Cantabria",
  },
  {
    title: "Sombras",
    category: "Luz y contraste en composiciones delicadas.",
    image: "/sombras.avif",
    alt: "Composición de luces y sombras — Roble Rojo",
  },
];

export type StoryFrame = {
  type: "full" | "portrait" | "double" | "text";
  src?: string;
  alt?: string;
  srcs?: [string, string];
  text?: string;
};

export type StorySession = {
  slug: string;
  name: string;
  location: string;
  year: string;
  intro: string;
  coverImage: string;
  alt: string;
  gallery: StoryFrame[];
};

export const storySessions: StorySession[] = [
  {
    slug: "estefania-bolonia",
    name: "ESTEFANÍA",
    location: "Bolonia",
    year: "2024",
    intro: "El último sol de septiembre. Sal, viento y una tarde sin prisa.",
    coverImage: "/estefania/bolonia3.jpg",
    alt: "Estefanía en Bolonia — sesión fotográfica Roble Rojo",
    gallery: [
      { type: "full", src: "/estefania/bolonia1.jpg", alt: "Estefanía caminando por Bolonia" },
      { type: "text", text: "Luz cálida, viento y el sonido de las olas." },
      { type: "double", srcs: ["/estefania/bolonia2.jpg", "/estefania/bolonia3.jpg"] },
      { type: "portrait", src: "/estefania/bolonia4.jpg", alt: "Retrato íntimo de Estefanía en Bolonia" },
      { type: "full", src: "/estefania/bolonia5.jpg", alt: "Momento final de la sesión de Estefanía en Bolonia" },
    ],
  },
   {
    slug: "aiala-bosque",
    name: "AIALA",
    location: "Cantabria",
    year: "2025",
    intro: "Entre árboles, luz y el silencio de un bosque.",
    coverImage: "/aiala/aiala5.jpg",
    alt: "Aiala en Cantabria — sesión fotográfica Roble Rojo",
    gallery: [
      { type: "full", src: "/aiala/aiala1.jpg", alt: "Aiala caminando por Cantabria" },
      { type: "text", text: "Un lugar para bajar el ritmo y dejarse llevar." },
      { type: "double", srcs: ["/aiala/aiala2.jpg", "/aiala/aiala3.jpg"] },
      { type: "portrait", src: "/aiala/aiala4.jpg", alt: "Retrato íntimo de Aiala en Cantabria" },
      { type: "full", src: "/aiala/aiala5.jpg", alt: "Momento final de la sesión de Aiala en Cantabria" },
    ],
  },
  {
    slug: "paloma-tarifa",
    name: "PALOMA",
    location: "Tarifa",
    year: "2024",
    intro: "Viento, piel y libertad. Una tarde en Tarifa.",
    coverImage: "/paloma/paloma1.jpg",
    alt: "Paloma en Tarifa — sesión fotográfica Roble Rojo",
    gallery: [
      { type: "full", src: "/paloma/paloma1.jpg", alt: "Paloma en Tarifa bajo la luz del atardecer" },
      { type: "text", text: "Dejar que el cuerpo siga el ritmo del viento." },
      { type: "double", src: "/paloma/paloma5.jpg", alt: "Paloma caminando por la playa de Tarifa" },
      { type: "portrait", src: "/paloma/paloma5.jpg", alt: "Retrato de Paloma en paisaje costero" },
      { type: "portrait", src: "/paloma/paloma3.jpg", alt: "Retrato de Paloma en paisaje costero" },
      { type: "portrait", src: "/paloma/paloma4.jpg", alt: "Paisaje y figura de Paloma junto al mar" },
      { type: "full", src: "/paloma/paloma2.jpg", alt: "Retrato de Paloma en paisaje costero" }
    ],
  },
  {
  slug: "sara-bosque-rio",
  name: "SARA",
  location: "Cantabria",
  year: "2026",
  intro: "Movimiento, naturaleza y una forma de habitar el cuerpo.",
  coverImage: "/sara/sara6.jpg",
  alt: "Sara en Cantabria — sesión fotográfica Roble Rojo",
  gallery: [
    { type: "full", src: "/sara/sara4.jpg", alt: "Sara entre el bosque en Cantabria" },
    { type: "text", text: "Entre la danza y la quietud, el cuerpo encuentra su propio lenguaje." },
    { type: "full", src: "/sara/sara2.avif", alt: "Sara junto al río en Cantabria" },
    { type: "portrait", src: "/sara/sara5.jpg", alt: "Retrato de Sara en el bosque" },
    { type: "double", srcs: ["/sara/sara1.avif", "/sara/sara3.avif"] },
  ],
},
];

export function getStoryBySlug(slug: string) {
  return storySessions.find((story) => story.slug === slug);
}

export const processSteps = [
  {
    title: "01. Conversación",
    description: "Exploramos tono, ritmo y propósito para crear una experiencia fluida.",
  },
  {
    title: "02. Planificación",
    description: "Diseñamos la sesión con sensibilidad, luz y espacio para que todo respire.",
  },
  {
    title: "03. Captura",
    description: "Estoy presente con una mirada atenta, ligera y honesta.",
  },
  {
    title: "04. Edición",
    description: "Selecciono cada imagen con criterio editorial y una intención íntima.",
  },
  {
    title: "05. Entrega",
    description: "Tu experiencia concluye con una presentación cuidada y serena.",
  },
];

export const testimonials = [
  {
    quote:
      "Cada imagen transmite una calma difícil de encontrar. Todo se sintió natural, elegante y profundamente humano.",
    name: "Clara M.",
    role: "Retrato personal",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "La energía de la sesión fue serena y hermosa. La edición tiene una sensibilidad extraordinaria.",
    name: "Elena & Tomás",
    role: "Familias",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400&q=80",
  },
  {
    quote:
      "Fue una experiencia muy cuidada, clara y elegante. Lo que recibí superó cualquier expectativa.",
    name: "Sofía R.",
    role: "Marca personal",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80",
  },
];
