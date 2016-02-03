class CandidateService {
  constructor($http, $rootScope) {
    this.rootScope = $rootScope;
    this.http = $http;
  }

  getCandidates() {
    return this.http.get("http://localhost:8000/candidates").then((response) => {
      return response.data;
    });
  }

  getCandidate(id) {
    return this.http.get(`http://localhost:8000/candidates/${id}`).then((response) => {
      return response.data;
    });
  }

  create(candidate) {
    return this.http.post("http://localhost:8000/candidates", candidate).then( (response) => {
      this.rootScope.$broadcast("candidateChange", response.data);
      return response.data;
    });
  }

  update(candidate) {
    return this.http.post(`http://localhost:8000/candidates/${candidate.id}`, candidate).then( (response) => {
      this.rootScope.$broadcast("candidateChange", response.data);
      return response.data;
    });
  }

}

CandidateService.$inject = ["$http", "$rootScope"];

export default CandidateService;
