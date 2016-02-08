let helloFilter = function($sce) {
  return function(text, more) {
    return $sce.trustAsHtml("<b>Hello</b>" + more + text);
  };
}

helloFilter.$inject = ["$sce"];

export default helloFilter;
