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
            return <h1>{strings[language].greet}</h1>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
