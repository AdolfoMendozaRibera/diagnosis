// src/App.tsx
import { useState } from 'react';
import './App.css';
import { SymptomsSelector } from './components//SymptomSelector';
import { SelectedSymptoms } from './components/SelectedSymptoms';
import { ResultsList } from './components/ResultsList';
import { SINTOMAS_DISPONIBLES, ENFERMEDADES } from './data/data';
import { calcularPorcentajeEnfermedades } from './utils/utils';
import type { ResultadoEnfermedad } from './types/types';
import { useTranslation } from 'react-i18next';
import { AVAILABLE_LANGUAGES } from './i18n';

function App() {
  const [sintomasSeleccionados, setSintomasSeleccionados] = useState<string[]>([]);
  const [resultados, setResultados] = useState<ResultadoEnfermedad[]>([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // ¡Bien hecho! Aquí obtienes la función 't' y el objeto 'i18n'
  const { t, i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleAgregarSintoma = (sintomaId: string) => {
    if (!sintomasSeleccionados.includes(sintomaId)) {
      setSintomasSeleccionados([...sintomasSeleccionados, sintomaId]);
      setMostrarResultados(false);
    }
  };

  const handleEliminarSintoma = (sintomaId: string) => {
    setSintomasSeleccionados(
      sintomasSeleccionados.filter(id => id !== sintomaId)
    );
    setMostrarResultados(false);
  };

  const handleVerificar = () => {
    if (sintomasSeleccionados.length === 0) {
      // 👈 MODIFICADO: Usar t() para traducir el mensaje de alerta
      alert(t('mensajes.alerta_sintoma'));
      return;
    }

    const resultadosCalculados = calcularPorcentajeEnfermedades(
      sintomasSeleccionados,
      ENFERMEDADES
    );

    setResultados(resultadosCalculados);
    setMostrarResultados(true);
  };

  return (
    <div id="caja-central">
      {/* 👈 ENVOLVER EN UN CONTENEDOR */}
      <div className="language-selector">
        <select 
          id="language-select"
          onChange={changeLanguage} 
          value={i18n.language.substring(0, 2)} 
          aria-label={t('general.seleccionar_idioma')}
        >
          {/* 👈 USAR: Usar la lista importada */}
          {AVAILABLE_LANGUAGES.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
      
      {/* 👈 MODIFICADO: Título de la App traducido */}
      <h2 id="caja-titulo">{t('general.titulo_app')}</h2>

      <div id="caja-consulta">
        {/* 👈 MODIFICADO: Título de la consulta traducido */}
        <h3 id="consulta-titulo">{t('general.selecciona_sintomas')}</h3>

        <SymptomsSelector
          sintomasDisponibles={SINTOMAS_DISPONIBLES}
          sintomasSeleccionados={sintomasSeleccionados}
          onAgregarSintoma={handleAgregarSintoma}
        />

        <button id="consulta-verificar" onClick={handleVerificar}>
          {/* 👈 MODIFICADO: Texto del botón traducido */}
          {t('general.verificar')}
        </button>

        <SelectedSymptoms
          sintomasSeleccionados={sintomasSeleccionados}
          sintomasDisponibles={SINTOMAS_DISPONIBLES}
          onEliminarSintoma={handleEliminarSintoma}
        />
      </div>

      <ResultsList
        resultados={resultados}
        mostrarResultados={mostrarResultados}
      />
    </div>
  );
}

export default App;