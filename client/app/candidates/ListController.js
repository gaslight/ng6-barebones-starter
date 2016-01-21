class ListController {
  constructor(CandidateService) {
    this.candidateService = CandidateService;
    this.candidateService.getCandidates().then( (candidates) => {
      this.candidates = candidates;
    });
  }
}

ListController.$inject = ["CandidateService"];
export default ListController
