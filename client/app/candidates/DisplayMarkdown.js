import template from "./displayMarkdown.html";

let displayMarkdown = () => {
  return {
    template: template,
    scope: {
      displayMarkdown: "="
    }
  }
};

export default displayMarkdown;
