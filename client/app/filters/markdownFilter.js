import { markdown } from "markdown";

let markdownFilter = function($sce) {
  return function(text) {
    return $sce.trustAsHtml(markdown.toHTML(text || ""));
  }
}

markdownFilter.$inject = ["$sce"];

export default markdownFilter;
