
class dynamicMeerkatElements {
    elements = {
        emailInput: () => cy.get('#email-address'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('button'),
        cameraButton: () => cy.get('li[name="Camera"]'),
        windowButtonClose: () => cy.get('.window-button__close'),
        pictureButton: () => cy.get('.sc-cwSeag'),
        imagesLibraryButton: () => cy.get('li[name="Gallery"]'),
        myLibrary: () => cy.get('.filter-my'),
        images: () => cy.get('.sc-bqWxrE img'),
        notesButton: () => cy.get('li[name="Notes"]'),
        notesBody: () => cy.get('.sc-hhOBVt'),
        rssButton: () => cy.get('li[name="RSS"]'),
        folderButton: () => cy.get('li[name="Folder"]'),
        browserButton: () => cy.get('li[name="Browser"]'),
        menuTitle: () => cy.get('.menu-app-title'),
        saveNoteButton: () => cy.get('svg.save-icon > path'),
        notes: () => cy.get('.sc-ezOQGI.iTfLSN'),
        secondNote: () => cy.get('.sc-ezOQGI > :nth-child(2)'),
        deleteNote: () =>  cy.get('#root > main > div > section > div > div > div.window-content > section > aside > div > div > svg'),
        deleteButton: () => cy.get('.buttons__delete'),
        rssNotes: () => cy.get('.sc-bjfHbI.jTjslC'),
        itemNumber: () => cy.get('.sc-dIfARi > :nth-child(8)'),
        itemTitle: () => cy.get('.sc-dmctIk'),
        listItemsNumber: () =>  cy.get('.sc-cjibBx'),
        menuItemsNumber: () => cy.get('.sc-iAEawV'),
        applicationsTitle: () => cy.get('.sc-jOiSOi > :nth-child(1) > .list-item-name'),
        photosTitle: () => cy.get('.sc-jOiSOi > :nth-child(2) > .list-item-name'),
        filesTitle: () =>  cy.get('.sc-jOiSOi > :nth-child(3) > .list-item-name'),
        emptyChunkMessage: () => cy.get('.sc-cUEOzv'),
        folderItemsCount: () => cy.get('.sc-cjibBx'),
        deepLink: () => cy.get('span > .cursor-pointer'),
        downloadedPath: () => '/Users/privat/Dynamic-Meerkat-AutomationTest/cypress/downloads/Hello_world_again__)_!.txt',
        urlPath: () => cy.get('.sc-pyfCe'),
        isItFriday: () =>  cy.get('.sc-kDvujY')
        }

    typeInElement(elem, input) {
        elem.type(input);
    };
}

module.exports = new dynamicMeerkatElements()