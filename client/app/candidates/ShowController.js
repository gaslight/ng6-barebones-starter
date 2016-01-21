class ShowController {
  constructor($stateParams) {
    this.candidate = {name: "Fred", id: $stateParams.id};
  }
}

ShowController.$inject = ["$stateParams"]
export default ShowController
