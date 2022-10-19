require("./pages/manageBooksPage");
require("./pages/newBookPage");

describe("teched", function () {
	const bookTitle = "New Book";
	it("create a new book", function () {
		When.onTheManageBooksPage.iClickOnCreateNewBook();
		When.onTheManageBooksPage.enterIDNewBook(1);
		When.onTheManageBooksPage.iClickContinueButton();
		When.onTheNewBookPage.iEnterTitle(bookTitle);
		When.onTheNewBookPage.iSelectGenre();
		When.onTheNewBookPage.iSelectAuthor();
		When.onTheNewBookPage.iClickOnSaveButton();
		Then.onTheNewBookPage.iSeeEditButton();
  });
	it("should check book is added", function() {
		When.onTheNewBookPage.iNavigateBack();
		Then.onTheManageBooksPage.iSeeGoButton();
		When.onTheManageBooksPage.iClickGoButton();
		Then.onTheManageBooksPage.theBookListContains(bookTitle);
	})
});