// src/types/types.ts

export interface Sintoma {
  id: string;
}

export interface Enfermedad {
  id: string;
  porcentaje: number;
  sintomas: string[];
}

export interface ResultadoEnfermedad {
  id: string;
  porcentaje: number;
}
