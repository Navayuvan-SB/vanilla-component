import { config } from "../config.js";

const initiateComponents = async () => {
  try {
    var content = document.getElementById("components");

    for (const key of Object.keys(config.components)) {
      let component = config.components[key];

      const container = document.createElement("div");
      container.setAttribute(config.htmlIdendifier, component.identifier);
      container.innerHTML = await (await fetch(component.path)).text();

      content.appendChild(container);
    }
  } catch (error) {
    console.log(error);
  }
};

export { initiateComponents };
