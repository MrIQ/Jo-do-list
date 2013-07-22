describe("todo", function() {

  beforeEach(function() {
    loadFixtures('to-do.html');
    });

  describe("#createToDo", function() {
    it("should be able to create a to do item under todo list", function() {
      $('.add textarea').val("first to do");
      $('.add a').click();

      expect($('.todos li:first-child')).toHaveText("first to do");
  });
});
});