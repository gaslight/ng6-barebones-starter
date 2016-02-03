class ListController {
  constructor(CandidateService, $scope) {
    this.candidateService = CandidateService;
    this.fetchCandidates();
    $scope.$on("candidateChange", () => {
      this.fetchCandidates();
    });
  }

  fetchCandidates() {
    this.candidateService.getCandidates().then( (candidates) => {
      this.candidates = candidates;
    });
  }
}

ListController.$inject = ["CandidateService", "$scope"];
export default ListController
