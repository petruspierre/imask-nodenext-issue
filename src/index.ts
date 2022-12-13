import IMask from "imask";

import "./styles.css";

document.getElementById("app")!.innerHTML = `
  <h1>Example</h1>
  <input name="test" id="test" />
`;

IMask(document.getElementById("test") as HTMLInputElement, {
  mask: "000-00"
});
