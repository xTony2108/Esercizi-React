import React, { createContext, useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";

export const LanguageContext = createContext("en");

export const Context2 = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
};
