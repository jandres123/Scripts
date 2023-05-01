//Description: This script logs in to the app using valid credentials.
describe('Login Flow Test', () => {
it('Logs in using valid credentials', () => {
cy.visit('https://qa-challenge.ensolvers.com/')
    cy.get('#username').type('user')
    cy.get('#password').type('user')
    cy.get('[data-cy="submit"]').click()
    //cy.url().should('include', '/folders')
  })
})
describe('Add New To-Do Item Test', () => {
    it('Adds a new to-do item to an existing folder', () => {
      cy.visit('https://qa-challenge.ensolvers.com/folders')
      cy.contains('.list-group-item', 'Folder 1').click()
      cy.get('#newTodo').click()
      const todoName = 'Test To-Do Item ' + Date.now()
      cy.get('#todoName').type(todoName)
      cy.get('#description').type('Test Description')
      cy.get('#dueDate').type('2023-05-15')
      cy.get('#submit').click()
      cy.contains('.list-group-item', todoName).should('exist')
    })
  })
 // Script 2: Create New Folder Test
//Description: This script creates a new folder with a unique name.

describe('Create New Folder Test', () => {
  it('Creates a new folder with a unique name', () => {
    cy.visit('https://qa-challenge.ensolvers.com/folders')
    cy.get('#newFolder').click()
    const folderName = 'Test Folder ' + Date.now()
    cy.get('#name').type(folderName)
    cy.get('#submit').click()
    cy.contains('.list-group-item', folderName).should('exist')
  })
})

//Script 3: Add New To-Do Item Test
//Description: This script adds a new to-do item to an existing folder.
describe('Add New To-Do Item Test', () => {
  it('Adds a new to-do item to an existing folder', () => {
    cy.visit('https://qa-challenge.ensolvers.com/folders')
    cy.contains('.list-group-item', 'Folder 1').click()
    cy.get('#newTodo').click()
    const todoName = 'Test To-Do Item ' + Date.now()
    cy.get('#todoName').type(todoName)
    cy.get('#description').type('Test Description')
    cy.get('#dueDate').type('2023-05-15')
    cy.get('#submit').click()
    cy.contains('.list-group-item', todoName).should('exist')
  })
})

//Script 4: Edit Folder Test
//Description: This script edits the name of an existing folder.
describe('Edit Folder Test', () => {
  it('Edits the name of an existing folder', () => {
    cy.visit('https://qa-challenge.ensolvers.com/folders')
    cy.contains('.list-group-item', 'Folder 1').click()
    cy.get('#editFolder').click()
    const folderName = 'Updated Folder Name ' + Date.now()
    cy.get('#name').clear().type(folderName)
    cy.get('#submit').click()
    cy.contains('.list-group-item', folderName).should('exist')
  })
})


//Script 5: Delete Folder Test
//Description: This script deletes an existing folder.
describe('Delete Folder Test', () => {
  it('Deletes an existing folder', () => {
    cy.visit('https://qa-challenge.ensolvers.com/folders')
    cy.contains('.list-group-item', 'Folder 1').click()
    cy.get('#deleteFolder').click()
    cy.get('#confirm').click()
    cy.contains('.list-group-item', 'Folder 1').should('not.exist')
  })
})

//Script 6: Edit To-Do Item Test
//Description: This script edits an existing to-do item.

describe('Edit To-Do Item Test', () => {
  it('Edits an existing to-do item', () => {
    cy.visit('https://qa-challenge.ensolvers.com/folders')
    cy.contains('.list-group-item', 'Folder 1').click()
    cy.contains('.list-group-item', 'To-Do Item 1').click()
    cy.get('#editTodo').click()
    const todoName = 'Updated To-Do Item Name ' + Date.now()
    cy.get('#todoName').clear().type(todoName)
    cy.get('#description').clear().type('Updated Test Description')
    cy.get('#dueDate').clear().type('2023-05-31')
    cy.get('#submit').click()
    cy.contains('.list-group-item', todoName).should('exist')
  })
})
