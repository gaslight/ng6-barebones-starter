class EditController {
  constructor(CandidateService, $stateParams, $state) {
    this.candidate = {};
    this.candidateService = CandidateService;
    this.state = $state;
    this.candidateService.getCandidate($stateParams.id).then( (candidate) => {
      this.candidate = candidate;
    });

  }
  save() {
    this.candidateService.update(this.candidate).then( (candidate) => {
      this.state.go("candidates.show", {id: candidate.id});
    });
  }
}

EditController.$inject = ["CandidateService", "$stateParams", "$state"];
export default EditController;
