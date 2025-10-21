// src/utils/utils.ts
import type { Enfermedad, ResultadoEnfermedad } from '../types/types';

export const calcularPorcentajeEnfermedades = (
  sintomasSeleccionados: string[],
  enfermedades: Enfermedad[]
): ResultadoEnfermedad[] => {
  if (sintomasSeleccionados.length === 0) {
    return [];
  }

  const resultados = enfermedades.map(enfermedad => {
    const sintomasCoincidentes = enfermedad.sintomas.filter(sintoma =>
      sintomasSeleccionados.includes(sintoma)
    ).length;

    const porcentaje = Math.round(
      (sintomasCoincidentes / enfermedad.sintomas.length) * 100
    );

    return {
      id: enfermedad.id,
      porcentaje
    };
  });

  // Ordenar por porcentaje descendente
  return resultados
    .filter(resultado => resultado.porcentaje > 0)
    .sort((a, b) => b.porcentaje - a.porcentaje);
};
