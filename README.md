<h2>Motivation</h2>
To provide the most simple implementation for internationalization


<h2>Design</h2>
<ul>
<li>Each language is represented by key value object which is of type </li>
<li>The current langauge is represent by curLang object</li>
<li>curLang is used inside the code</li>
</ul>

<h2>Code</h2>

```ts

en.ts
const en : IColors = {
  red: 'Red',
  green: "Green",
  blue: 'Blue'
}

fr.ts
const fr : IColors = {
  red: 'Rouge',
  green: "Vert",
  blue: 'Bleu'
}


main.ts
const curLang = fr;
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p>current language : ${curLang == fr ? 'French' : 'English' }</p>
    <p>Colors</p>
    <ul>
    <li>${curLang.red}</li>
    <li>${curLang.green}</li>
    <li>${curLang.blue}</li>
    </ul>
  </div>
`

```


