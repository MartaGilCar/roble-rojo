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
    intro: "Un atardecer cualquiera de Septiembre. Silencio, calma y olas.",
    coverImage: "/estefania/bolonia3.jpg",
    alt: "Estefanía en Bolonia — sesión fotográfica Roble Rojo",
    gallery: [
      { type: "full", src: "/estefania/bolonia1.jpg", alt: "Estefanía caminando por Bolonia" },
      { type: "text", text: "Una tarde entre calles, luz y movimiento." },
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
    intro: "Entre árboles, luz y calma.",
    coverImage: "/aiala/aiala5.jpg",
    alt: "Aiala en Cantabria — sesión fotográfica Roble Rojo",
    gallery: [
      { type: "full", src: "/aiala/aiala1.jpg", alt: "Aiala caminando por Cantabria" },
      { type: "text", text: "Una tarde entre árboles, luz y calma." },
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
    intro: "Luz y viento.",
    coverImage: "/paloma/paloma1.jpg",
    alt: "Paloma en Tarifa — sesión fotográfica Roble Rojo",
    gallery: [
      { type: "full", src: "/paloma/paloma1.jpg", alt: "Paloma en Tarifa bajo la luz del atardecer" },
      { type: "text", text: "Luz, viento y un paisaje que acompaña cada gesto." },
      { type: "double", src: "/paloma/paloma5.jpg", alt: "Paloma caminando por la playa de Tarifa" },
      { type: "portrait", src: "/paloma/paloma5.jpg", alt: "Retrato de Paloma en paisaje costero" },
      { type: "portrait", src: "/paloma/paloma3.jpg", alt: "Retrato de Paloma en paisaje costero" },
      { type: "portrait", src: "/paloma/paloma4.jpg", alt: "Paisaje y figura de Paloma junto al mar" },
      { type: "full", src: "/paloma/paloma6.jpg", alt: "Retrato de Paloma en paisaje costero" }
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
