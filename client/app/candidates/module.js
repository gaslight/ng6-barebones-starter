import angular from "angular";
import uiRouter from "angular-ui-router";
import listTemplate from "./list.html";

let candidatesModule = angular.module("candidates", [uiRouter]);

candidatesModule.config(($stateProvider) => {
  $stateProvider.state("candidates", {
    url: "/candidates",
    template: listTemplate
  });
});

export default candidatesModule;
