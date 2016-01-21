import angular from "angular";
import uiRouter from "angular-ui-router";
import listTemplate from "./list.html";
import ListController from "./ListController";
import CandidateService from "./CandidateService";
import showTemplate from "./show.html";
import ShowController from "./ShowController";

let candidatesModule = angular.module("candidates", [uiRouter]);

candidatesModule.service("CandidateService", CandidateService);

candidatesModule.config(($stateProvider) => {
  $stateProvider.state("candidates", {
    url: "/candidates",
    template: listTemplate,
    controller: ListController,
    controllerAs: "vm"
  });
  $stateProvider.state("candidates.show", {
    url: "/:id",
    template: showTemplate,
    controller: ShowController,
    controllerAs: "vm"
  });

});

export default candidatesModule;
