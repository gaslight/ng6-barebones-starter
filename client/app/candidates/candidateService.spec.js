import CandidatesModule from "./module";

describe('CandidateService', () => {
  beforeEach(window.module(CandidatesModule.name));

  let candidateService, httpBackend;

  beforeEach(inject((CandidateService, $httpBackend) => {
    candidateService = CandidateService;
    httpBackend = $httpBackend;
  }));

  it("should find candidates", function() {
    httpBackend.expectGET('http://localhost:8000/candidates').respond([{name: "Bob"}]);
    candidateService.getCandidates().then( (candidates) => {
      expect(candidates.length).to.equal(1);
    });
    httpBackend.flush();
  });

  it("should find candidate by id", function() {
    let retrievedCandidate = {};
    httpBackend.expectGET('http://localhost:8000/candidates/1').respond({name: "Bob", id: 1});
    candidateService.get(1).then( (candidate) => {
      retrievedCandidate = candidate;
      expect(retrievedCandidate.id).to.equal(1);
    });
    httpBackend.flush();
  });

});
