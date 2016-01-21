import angular from "angular";
import uiRouter from "angular-ui-router";
import homeTemplate from "./home.html";

let module = angular.module("hirem", [uiRouter]);

module.config( ($stateProvider) => {
  $stateProvider.state("home", {
    url: "/",
    template: homeTemplate
  })
});
