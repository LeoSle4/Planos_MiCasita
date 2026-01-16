import imgQuintana from '../assets/project-quintana.jpg';
import imgHerrera from '../assets/project-paredes.jpg'; // Real Herrera image was in paredes asset
import imgParedes from '../assets/project-herrera.jpg'; // Real Paredes image was in herrera asset

export type BlockType = 'text' | 'image' | 'quote' | 'stats';

export interface Block {
  type: BlockType;
  content?: string; // For text and quote
  src?: string;     // For image
  caption?: string; // For image
  author?: string;  // For quote
  items?: { label: string; value: string }[]; // For stats
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  location: string;
  year: string;
  area: string;
  thumbnail?: string; 
  blocks: Block[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "PROYECTO QUINTANA",
    subtitle: "Multifamiliar - 3 Pisos + Azotea",
    category: "Residencial",
    description: "Diseño contemporáneo optimizado para 3 niveles.",
    location: "Manilza, Ate",
    year: "2024",
    area: "120 m²",
    thumbnail: imgQuintana,
    blocks: [
      {
        type: 'image',
        src: imgQuintana,
        caption: 'Fachada Principal - Proyecto Quintana'
      },
      {
        type: 'text',
        content: "Fachada contemporánea con composición vertical, uso de vidrio para mayor iluminación natural, balcones con barandas transparentes y detalles en madera y vegetación que aportan modernidad y calidez al conjunto."
      },
      {
        type: 'stats',
        items: [
            { label: 'Estatus', value: 'Proyecto Técnico' },
            { label: 'Niveles', value: '3 Pisos + Azotea' },
            { label: 'Ubicación', value: 'Manilza, Ate' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "PROYECTO HERRERA",
    subtitle: "Multifamiliar - 6 Pisos + Azotea",
    category: "Residencial",
    description: "Edificio multifamiliar de alta densidad con diseño moderno.",
    location: "Salamanca, Ate",
    year: "2024",
    area: "120 m²",
    thumbnail: imgHerrera,
    blocks: [
      {
        type: 'image',
        src: imgHerrera,
        caption: 'Elevación Frontal - Proyecto Herrera'
      },
      {
        type: 'text',
        content: "Fachada de líneas limpias y verticales que combina concreto, madera y vidrio, incorporando balcones con vegetación para aportar luz natural, calidez y una imagen moderna al edificio."
      },
      {
        type: 'stats',
        items: [
            { label: 'Estatus', value: 'Diseño Estructural' },
            { label: 'Niveles', value: '6 Pisos + Azotea' },
            { label: 'Ubicación', value: 'Salamanca, Ate' }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "PROYECTO PAREDES",
    subtitle: "Multifamiliar - 6 Pisos + Azotea",
    category: "Residencial",
    description: "Composición simétrica y urbana para vivienda multifamiliar.",
    location: "Horacio Zevallos, Ate",
    year: "2024",
    area: "100 m²",
    thumbnail: imgParedes,
    blocks: [
      {
        type: 'image',
        src: imgParedes,
        caption: 'Diseño Urbano - Proyecto Paredes'
      },
      {
        type: 'text',
        content: "Fachada moderna de composición simétrica, con volúmenes verticales en color acento, amplios vanos de vidrio y un primer nivel más sólido que refuerza el carácter urbano del edificio."
      },
      {
        type: 'stats',
        items: [
            { label: 'Estatus', value: 'Anteproyecto' },
            { label: 'Niveles', value: '6 Pisos + Azotea' },
            { label: 'Ubicación', value: 'Horacio Zevallos, Ate' }
        ]
      }
    ]
  }
];
