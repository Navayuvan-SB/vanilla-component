import { initiateComponents } from "./components/index.js";
import { renderButton } from "./components/button/index.js";

window.onload = async function () {
  await initiateComponents();
  sampleComponentRender();
};

const sampleComponentRender = () => {
  const button = renderButton("Summa");
  document.body.appendChild(button);
};
