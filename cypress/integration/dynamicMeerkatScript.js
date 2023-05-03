import dynamicMeerkatElements from "../POM/dynamicMeerkatElements"

describe('Visit Dynamic Meerkat page', () => {
    beforeEach('Visit payment page and login', () => {
        cy.fixture('data.json').then((data) => {
            cy.visit(data.url);
            cy.typeInElement(dynamicMeerkatElements.elements.emailInput(), data.email);
            cy.typeInElement(dynamicMeerkatElements.elements.passwordInput(), data.password);
            dynamicMeerkatElements.elements.loginButton().click();
         });
    });

    it('should check buttons background gradient colour', () => {
        cy.fixture('data.json').then((data) => {
            cy.checkElementGradientColour(dynamicMeerkatElements.elements.cameraButton(), data.gradients.cameraButton);
            cy.checkElementGradientColour(dynamicMeerkatElements.elements.notesButton(), data.gradients.notesButton);
            cy.checkElementGradientColour(dynamicMeerkatElements.elements.imagesLibraryButton(), data.gradients.imagesLibraryButton);
            cy.checkElementGradientColour(dynamicMeerkatElements.elements.imagesLibraryButton(), data.gradients.imagesLibraryButton);
            cy.checkElementGradientColour(dynamicMeerkatElements.elements.rssButton(), data.gradients.rssButton);
            cy.checkElementGradientColour(dynamicMeerkatElements.elements.folderButton(), data.gradients.folderButton);
            cy.checkElementGradientColour(dynamicMeerkatElements.elements.browserButton(), data.gradients.browserButton);
        })
    })
  
    it('Should check camera button functionality and check image library', () => {
        cy.fixture('data.json').then((data) => {
        dynamicMeerkatElements.elements.cameraButton()
        .click();
        dynamicMeerkatElements.elements.menuTitle()
        .should('have.text', data.expectedText.camera)
        dynamicMeerkatElements.elements.windowButtonClose()
        .click();
        dynamicMeerkatElements.elements.cameraButton()
        .click();
        dynamicMeerkatElements.elements.pictureButton()
        .click()
        .click()
        .click()
        .click();
        dynamicMeerkatElements.elements.windowButtonClose()
        .click();
        dynamicMeerkatElements.elements.imagesLibraryButton()
        .click();
        dynamicMeerkatElements.elements.menuTitle()
        .should('have.text', data.expectedText.gallery);
        dynamicMeerkatElements.elements.myLibrary()
        .click();
        cy.checkNumberOfImages(dynamicMeerkatElements.elements.images(), 4)
        dynamicMeerkatElements.elements.windowButtonClose()
        .click();
        dynamicMeerkatElements.elements.cameraButton()
        .click();
        dynamicMeerkatElements.elements.pictureButton()
        .click();
        dynamicMeerkatElements.elements.windowButtonClose()
        .click();
        dynamicMeerkatElements.elements.imagesLibraryButton()
        .click();
        dynamicMeerkatElements.elements.myLibrary()
        .click()
        cy.wait(1000)
        cy.checkNumberOfImages(dynamicMeerkatElements.elements.images(), 5);
        });
    });

    it('Should check notes functionality', () => {
        cy.fixture('data.json').then((data) => {
      dynamicMeerkatElements.elements.notesButton()
      .click();
      dynamicMeerkatElements.elements.menuTitle()
      .should('have.text', data.expectedText.notes);
      cy.typeInElement(dynamicMeerkatElements.elements.notesBody(), data.input.standardGreeting);
      dynamicMeerkatElements.elements.saveNoteButton()
      .click({force: true});
      cy.typeInElement(dynamicMeerkatElements.elements.notesBody(), data.input.wellnessCheck);
      dynamicMeerkatElements.elements.saveNoteButton()
      .click({force: true});
      cy.typeInElement(dynamicMeerkatElements.elements.notesBody(), data.input.positiveWeather);
      dynamicMeerkatElements.elements.saveNoteButton()
      .click({force: true});
      cy.countListItems(dynamicMeerkatElements.elements.notes(), 3);
      dynamicMeerkatElements.elements.secondNote().click();
      dynamicMeerkatElements.elements.deleteNote().click();
      cy.contains('h4', data.expectedText.deleteConfirmation);
      dynamicMeerkatElements.elements.deleteButton().click();
      cy.countListItems(dynamicMeerkatElements.elements.notes(), 2);
        });
    });

    it('Should check RSS functionality', () => {
        cy.fixture('data.json').then((data) => {
        dynamicMeerkatElements.elements.rssButton()
        .click();
        dynamicMeerkatElements.elements.menuTitle()
        .should('have.text', data.expectedText.rss);
        cy.countListItems(dynamicMeerkatElements.elements.rssNotes(), 100);
        dynamicMeerkatElements.elements.itemNumber()
        .click();
        cy.contains('h2', data.expectedText.elementValue);
        dynamicMeerkatElements.elements.windowButtonClose()
        .click();
        });
    });

    it('Should check Folder functionality', () => {
        cy.fixture('data.json').then((data) => {
        dynamicMeerkatElements.elements.folderButton()
        .click();
        dynamicMeerkatElements.elements.menuTitle()
        .should('have.text', data.expectedText.folder);
        cy.countListItems(dynamicMeerkatElements.elements.listItemsNumber(), 5);
        cy.countListItems(dynamicMeerkatElements.elements.menuItemsNumber(), 3);
        dynamicMeerkatElements.elements.applicationsTitle()
        .should('have.text', data.expectedText.applications);
        dynamicMeerkatElements.elements.photosTitle()
        .should('have.text', data.expectedText.photos);
        dynamicMeerkatElements.elements.filesTitle()
        .should('have.text', data.expectedText.files);
        dynamicMeerkatElements.elements.photosTitle()
        .click();
        dynamicMeerkatElements.elements.emptyChunkMessage()
        .should('have.text', data.input.missingPhotosPrompt);
        dynamicMeerkatElements.elements.filesTitle()
        .click();
        dynamicMeerkatElements.elements.emptyChunkMessage()
        .should('have.text', data.input.missingFilesPrompt);
        dynamicMeerkatElements.elements.photosTitle()
        .click();
        dynamicMeerkatElements.elements.deepLink()
        .click();
        dynamicMeerkatElements.elements.pictureButton()
        .click();
        dynamicMeerkatElements.elements.windowButtonClose()
        .first()
        .click();
        cy.checkNumberOfImages(dynamicMeerkatElements.elements.folderItemsCount(), 1);
        dynamicMeerkatElements.elements.filesTitle()
        .click();
        dynamicMeerkatElements.elements.deepLink()
        .click();
        cy.typeInElement(dynamicMeerkatElements.elements.notesBody(), data.input.repeatedGreeting);
        dynamicMeerkatElements.elements.saveNoteButton()
        .click({force: true});
        dynamicMeerkatElements.elements.windowButtonClose()
        .first()
        .click();
        cy.checkNumberOfImages(dynamicMeerkatElements.elements.folderItemsCount(), 1)
        cy.get('a')
        .click();
        cy.CheckDownloadedPath(dynamicMeerkatElements.elements.downloadedPath());
        dynamicMeerkatElements.elements.windowButtonClose()
        .click();
        });
    });

    it('Should check Browser functionality', () => {
        cy.fixture('data.json').then((data) => {
        dynamicMeerkatElements.elements.browserButton()
        .click();
        dynamicMeerkatElements.elements.menuTitle()
        .should('have.text', data.expectedText.browser);
        dynamicMeerkatElements.elements.urlPath().clear()
        cy.typeInElement(dynamicMeerkatElements.elements.urlPath(), data.isItFridayUrl);
        dynamicMeerkatElements.elements.isItFriday().click()
        });
    });
});