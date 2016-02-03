describe('my angular app', function () {

  describe('visiting the list of candidates', function () {


    beforeEach(function () {
      browser.get('#/candidates');
    });

    it('should show me a list of books', function() {
      firstRow = element(by.repeater("candidate in vm.candidates").row(0));

      firstRow.getText().then(function(text) {
        expect(text).toEqual("John Doe")
      });
    });
  });

  describe("creating a new candidate", function() {
    beforeEach(function() {
      browser.get("#/candidates/new");
    });

    it("should display the candidate after creating", function() {
      element(by.model("vm.candidate.name")).sendKeys("Fred");
      element(by.buttonText("Save")).click();
      expect(element(by.css("body")).getText()).toMatch(/Fred/);
      var lastRow = element.all(by.repeater("candidate in vm.candidates")).last();
      expect(lastRow.getText()).toMatch(/Fred/);
    });
  });
});
