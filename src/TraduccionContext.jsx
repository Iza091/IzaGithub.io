import { createContext, useContext, useEffect, useState } from "react";
import traducciones from "./traducciones";

const TraduccionContext = createContext();

export function TraduccionProvider({ children }) {
  const [idioma, setIdioma] = useState(
    () => localStorage.getItem("idioma") || "es"
  );

  useEffect(() => {
    localStorage.setItem("idioma", idioma);
    document.documentElement.lang = idioma;
  }, [idioma]);

  const cambiarIdioma = (nuevo) => setIdioma(nuevo);
  const t = traducciones[idioma];

  return (
    <TraduccionContext.Provider value={{ idioma, cambiarIdioma, t }}>
      {children}
    </TraduccionContext.Provider>
  );
}

export function useTraduccion() {
  return useContext(TraduccionContext);
}

// Mezcla arrays de datos (base es) con sus variantes por idioma por índice
export function combinar(base, variantes) {
  if (!variantes || !Array.isArray(variantes)) return base;
  return base.map((item, i) => ({ ...item, ...(variantes[i] || {}) }));
}
