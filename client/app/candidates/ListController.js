class ListController {
  constructor($http) {
    $http.get("http://localhost:8000/candidates").then( (candidates) => {
      this.candidates = candidates;
    });
  }
}

ListController.$inject = ["$http"]
export default ListController
