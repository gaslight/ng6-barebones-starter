import angular from "angular";
import uiRouter from "angular-ui-router";
import homeTemplate from "./home.html";
import aboutTemplate from "./about.html";
import candidatesModule from "./candidates/module";
import filtersModule from "./filters/module";

let module = angular.module("hirem", [uiRouter, candidatesModule.name, filtersModule.name]);

module.config( ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state("home", {
    url: "/",
    template: homeTemplate
  });
  $stateProvider.state("about", {
    url: "/about",
    template: aboutTemplate
  })

});
