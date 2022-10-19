module.exports = createPageObjects({
	NewBook: {
		// replace <iDoAction> under actions with the method defined in teched.spec.js
		actions: {
			iEnterTitle: function (sTitle) {
				element(by.control({
					id: "admin::BooksDetailsList--fe::EditableHeaderForm::EditableHeaderTitle::Field-edit",
					interaction: {
						idSuffix: "inner"
					}
				})).sendKeys(sTitle);
			},
			iSelectGenre: function() {
				element(by.control({
					id: "admin::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::genre_ID::Field-edit-inner-vhi"
				})).click();
				element(by.control({
					controlType: "sap.fe.core.controls.FieldWrapper",
					viewId: "admin::BooksDetailsList",
					searchOpenDialogs: true,
					descendant: {
						controlType: "sap.m.Text",
						viewId: "admin::BooksDetailsList",
						bindingPath: {
							path: "/Genres(10)",
							propertyPath: "ID"
						},
						searchOpenDialogs: true
					}
				})).click();
			},
			iSelectAuthor: function() {
				element(by.control({
					id: "admin::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::author_ID::Field-edit-inner-vhi"
				})).click();
				element(by.control({
					controlType: "sap.fe.core.controls.FieldWrapper",
					viewId: "admin::BooksDetailsList",
					searchOpenDialogs: true,
					descendant: {
						controlType: "sap.m.Text",
						viewId: "admin::BooksDetailsList",
						bindingPath: {
							path: "/Authors(107)",
							propertyPath: "ID"
						},
						searchOpenDialogs: true
					}
				})).click();
			},
			iClickOnSaveButton: function() {
				element(by.control({
					id: "admin::BooksDetailsList--fe::FooterBar::StandardAction::Save",
					interaction: {
						idSuffix: "BDI-content"
					}
				})).click();
			},
			iNavigateBack: function() {
				element(by.control({
					id: "backBtn"
				})).click();
			}
		},

		assertions: {
			iSeeEditButton: function () {
				var editButton = element(by.control({
					id: "admin::BooksDetailsList--fe::StandardAction::Edit",
					interaction: {
						idSuffix: "BDI-content"
					}
				}));
				expect(editButton.isPresent()).toBeTruthy();
			},
		},
	},
});