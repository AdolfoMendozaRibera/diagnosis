// src/data/data.ts
import type { Sintoma, Enfermedad } from '../types/types';

export const SINTOMAS_DISPONIBLES: Sintoma[] = [
  { id: 'dolor-cabeza' },
  { id: 'fiebre' },
  { id: 'tos' },
  { id: 'dolor-garganta' },
  { id: 'congestion' },
  { id: 'fatiga' },
  { id: 'dolor-muscular' },
  { id: 'dificultad-respirar' },
  { id: 'nauseas' },
  { id: 'escalofrios' }
];

export const ENFERMEDADES: Enfermedad[] = [
  {
    id: 'gripe',
    porcentaje: 0,
    sintomas: ['fiebre', 'tos', 'dolor-cabeza', 'fatiga', 'dolor-muscular', 'escalofrios']
  },
  {
    id: 'influenza',
    porcentaje: 0,
    sintomas: ['fiebre', 'tos', 'dolor-cabeza', 'fatiga', 'dolor-muscular', 'escalofrios', 'dolor-garganta']
  },
  {
    id: 'covid',
    porcentaje: 0,
    sintomas: ['fiebre', 'tos', 'fatiga', 'dificultad-respirar', 'dolor-cabeza', 'dolor-muscular']
  },
  {
    id: 'resfriado',
    porcentaje: 0,
    sintomas: ['congestion', 'dolor-garganta', 'tos', 'dolor-cabeza']
  },
  {
    id: 'asma',
    porcentaje: 0,
    sintomas: ['dificultad-respirar', 'tos', 'fatiga']
  },
  {
    id: 'amigdalitis',
    porcentaje: 0,
    sintomas: ['dolor-garganta', 'fiebre', 'dolor-cabeza', 'fatiga']
  }
];
