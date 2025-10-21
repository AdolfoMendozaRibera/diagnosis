// src/components/SelectedSymptoms.tsx
import type { Sintoma } from '../types/types';
import { useTranslation } from 'react-i18next';

interface SelectedSymptomsProps {
  sintomasSeleccionados: string[];
  sintomasDisponibles: Sintoma[];
  onEliminarSintoma: (sintomaId: string) => void;
}

export const SelectedSymptoms = ({
  sintomasSeleccionados,
  onEliminarSintoma
}: SelectedSymptomsProps) => {
  const { t } = useTranslation();

  const obtenerNombreSintoma = (id: string): string => {
    return t(`sintomas.${id}`);
  };

  if (sintomasSeleccionados.length === 0) {
    return (
      <div id="consulta-lista-sintomas">
        <p className="sin-sintomas">{t('mensajes.sin_sintomas_seleccionados')}</p>
      </div>
    );
  }

  return (
    <div id="consulta-lista-sintomas">
      {sintomasSeleccionados.map(sintomaId => (
        <div key={sintomaId} className="lista-sintomas">
          <button
            className="boton-eliminar"
            onClick={() => onEliminarSintoma(sintomaId)}
            aria-label={t('acciones.eliminar_sintoma', { sintoma: obtenerNombreSintoma(sintomaId) })}
          >
            ×
          </button>
          {/* ✅ MEJORA: Mostrar el nombre traducido */}
          <p>{obtenerNombreSintoma(sintomaId)}</p>
        </div>
      ))}
    </div>
  );
};