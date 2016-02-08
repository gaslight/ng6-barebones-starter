import angular from "angular";
import uiRouter from "angular-ui-router";
import listTemplate from "./list.html";
import ListController from "./ListController";
import CandidateService from "./CandidateService";
import showTemplate from "./show.html";
import ShowController from "./ShowController";
import formTemplate from "./form.html";
import NewController from "./NewController";
import EditController from "./EditController";
import displayMarkdown from "./DisplayMarkdown";

let candidatesModule = angular.module("candidates", [uiRouter]);

candidatesModule.service("CandidateService", CandidateService);

candidatesModule.config(($stateProvider) => {
  $stateProvider.state("candidates", {
    url: "/candidates",
    template: listTemplate,
    controller: ListController,
    controllerAs: "vm"
  });
  $stateProvider.state("candidates.new", {
    url: "/new",
    template: formTemplate,
    controller: NewController,
    controllerAs: "vm"
  });
  $stateProvider.state("candidates.show", {
    url: "/:id",
    template: showTemplate,
    controller: ShowController,
    controllerAs: "vm"
  });
  $stateProvider.state("candidates.edit", {
    url: "/:id/edit",
    template: formTemplate,
    controller: EditController,
    controllerAs: "vm"
  });

});

candidatesModule.directive("displayMarkdown", displayMarkdown);

export default candidatesModule;
