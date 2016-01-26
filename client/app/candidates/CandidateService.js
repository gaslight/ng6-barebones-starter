class CandidateService {
  constructor($http) {
    this.http = $http;
  }

  getCandidates() {
    return this.http.get("http://localhost:8000/candidates").then((response) => {
      this.candidates = response.data;
      return this.candidates;
    });
  }

  getCandidate(id) {
    return this.http.get(`http://localhost:8000/candidates/${id}`).then((response) => {
      return response.data;
    });
  }

  create(candidate) {
    return this.http.post("http://localhost:8000/candidates", candidate).then( (response) => {
      this.candidates.push(response.data);
      return response.data;
    });
  }

  update(candidate) {
    return this.http.post(`http://localhost:8000/candidates/${candidate.id}`, candidate).then( (response) => {
      return response.data;
    });
  }

}

CandidateService.$inject = ["$http"];

export default CandidateService;
