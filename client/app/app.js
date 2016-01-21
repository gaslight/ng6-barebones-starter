import angular from "angular";
import uiRouter from "angular-ui-router";
import homeTemplate from "./home.html";
import aboutTemplate from "./about.html";

let module = angular.module("hirem", [uiRouter]);

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
