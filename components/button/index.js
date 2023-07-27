import { config } from "../../config.js";
import { findAndCloneElement } from "../../utils/index.js";

const renderButton = (title) => {
  const wrapper = findAndCloneElement(config.components.button.identifier);
  const button = wrapper.querySelector("#button");
  button.innerText = title;
  return wrapper;
};

export { renderButton };
