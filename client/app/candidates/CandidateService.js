class CandidateService {
  constructor($http) {
    this.http = $http;
  }

  getCandidates() {
    return this.http.get("http://localhost:8000/candidates").then((response) => {
      return response.data;
    });
  }
}

CandidateService.$inject = ["$http"];

export default CandidateService;
