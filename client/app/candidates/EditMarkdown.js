import template from "./editMarkdown.html";

let editMarkdown = () => {
  return {
    template: template,
    scope: {
      editMarkdown: "="
    }
  }
};

export default editMarkdown;
