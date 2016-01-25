class ShowController {
  constructor($stateParams, CandidateService) {
    CandidateService.getCandidate($stateParams.id).then( (candidate) => {
      this.candidate = candidate;
    });
  }
}

ShowController.$inject = ["$stateParams", "CandidateService"]
export default ShowController
