import { config } from "../config.js";

const findAndCloneElement = (identifier) => {
  const template = document.querySelector(
    `[${config.htmlIdendifier}="${identifier}"]`
  );
  const wrapper = template.cloneNode(true);
  return wrapper;
};

export { findAndCloneElement };
