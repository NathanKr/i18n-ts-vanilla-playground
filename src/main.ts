import "./style.css";
import fr from './locales/fr'
import en from './locales/en'


const curLang = en;
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

document.querySelector<HTMLButtonElement>("#counter")!;
