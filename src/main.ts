import "./style.css";
import { setupCounter } from "./counter";
import { ILang } from "./types";

const en: ILang = {
  red: "Red",
  green: "Green",
  blue: "Blue",
};

const fr: ILang = {
  red: "Rouge",
  green: "Vert",
  blue: "Bleu",
};

const curLang = fr;
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <p>current language : ${curLang == fr ? "French" : "English"}</p>
    <p>Colors</p>
    <ul>
    <li>${curLang.red}</li>
    <li>${curLang.green}</li>
    <li>${curLang.blue}</li>
    </ul>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
