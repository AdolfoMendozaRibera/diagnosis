// src/components/ResultsList.tsx
import type { ResultadoEnfermedad } from '../types/types';
import { useTranslation } from 'react-i18next';

interface ResultsListProps {
  resultados: ResultadoEnfermedad[];
  mostrarResultados: boolean;
}

export const ResultsList = ({ resultados, mostrarResultados }: ResultsListProps) => {
  const { t } = useTranslation();

  if (!mostrarResultados) {
    return (
      <div id="caja-lista-enfermedades">
        <p>{t('mensajes.resultados_vacio')}</p> 
        <div id="lista-enfermedades"></div>
      </div>
    );
  }

  if (resultados.length === 0) {
    return (
      <div id="caja-lista-enfermedades">
        <p>{t('general.resultados')}:</p> 
        <div id="lista-enfermedades">
          <p className="sin-resultados">
            {t('mensajes.no_coincidencias')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="caja-lista-enfermedades">
      <p>{t('general.resultados')}:</p> 
      <div id="lista-enfermedades">
        {resultados.map(resultado => (
          <div key={resultado.id} className="resultado-enfermedad">
            <p>
              <strong>{t(`enfermedades.${resultado.id}`)}:</strong> {resultado.porcentaje}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};