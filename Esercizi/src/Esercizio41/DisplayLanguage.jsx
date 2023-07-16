import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext2";

export const DisplayLanguage = () => {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h1>{language}</h1>
    </div>
  );
};
