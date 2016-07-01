import React, { Component } from "react";


export default class ThanksPage extends Component {
  render() {
    const langs = [
      "Merci",
      "Thank you",
      "Gracias",
      "謝謝",
      "Dankon",
      "ﺷﻜﺮﺍ",
      "Danke",
      "धन्यवाद",
      "Grazie",
      "ありがとう",
      "Dank u",
      "Gràcies",
      "நன்றி",
      "Спасибо!",
      "Eskerrik asko",
      "唔該",
      "תודה רבה",
      "Mercés",
      "Tack",
      "ཐུགས་རྗེ་ཆེ་།",
      "Teşekkürler"
    ];
    return (
      <div id="thanks" className="center-align">
        <div>{langs.map((l) => <span className={`size${Math.round(Math.random() * 2) + 1}`}>{l}</span>)}</div>
      </div>
    );
  }
}
