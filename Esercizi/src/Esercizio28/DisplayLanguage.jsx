import React from "react";
import { LanguageContext } from "./LanguageContext";

const strings = {
  en: {
    greet: "Hello",
  },
  it: {
    greet: "Ciao",
  },
};

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return <h2>{strings[language].greet}</h2>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
