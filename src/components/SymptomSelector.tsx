// src/components/SymptomsSelector.tsx
import { useState } from 'react';
import type { Sintoma } from '../types/types';
import { useTranslation } from 'react-i18next';


interface SymptomsSelectorProps {
  sintomasDisponibles: Sintoma[];
  sintomasSeleccionados: string[];
  onAgregarSintoma: (sintomaId: string) => void;
}

export const SymptomsSelector = ({
  sintomasDisponibles,
  sintomasSeleccionados,
  onAgregarSintoma
}: SymptomsSelectorProps) => {
  const [selectedValue, setSelectedValue] = useState('');
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value && !sintomasSeleccionados.includes(value)) {
      onAgregarSintoma(value);
      setSelectedValue('');
    }
  };

  const sintomasNoSeleccionados = sintomasDisponibles.filter(
    sintoma => !sintomasSeleccionados.includes(sintoma.id)
  );

  return (
    <select
      id="consulta-sintomas"
      value={selectedValue}
      onChange={handleChange}
      aria-label={t('general.selecciona_un_sintoma')}
    >
      <option value="">{t('general.selecciona_un_sintoma')}</option>
      {sintomasNoSeleccionados.map(sintoma => (
        <option key={sintoma.id} value={sintoma.id}>
          {t(`sintomas.${sintoma.id}`)}
        </option>
      ))}
    </select>
  );
};