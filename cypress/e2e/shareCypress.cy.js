describe('template spec', () => {
  var data
  var userName
  var password

  beforeEach(()=>{
    cy.fixture('data').then((dataJson)=>{  //data1 => data1.json
      data = dataJson
      userName = data.userName
      password = data.password
      cy.log(userName)
      cy.log(password)
    })
  })

  it('login success', function() {
    login(userName,password)
  });

  it('login fail', function() {
    cy.visit('https://acetoys.uk/our-story');
    cy.get('#LoginLink').click();
    cy.get('#username').type("test-valid-user");
    cy.get('#password').type(password);
    cy.get('.btn').click();
    cy.get('.alert').should('be.visible').contains('Invalid credentials')
  });

  it('checkout product', function() {
    login(userName,password)
    cy.get('.list-group > :nth-child(1)').click()
    cy.get(':nth-child(1) > [style="position: relative"] > p > .btn').click()
    cy.get(':nth-child(3) > .btn-success').click()
    cy.get('.text-right > .btn').click()
    cy.get('.display-3').should('be.visible').contains("Order complete!")
  });

  function login(userName,password){
    cy.visit('https://acetoys.uk/our-story');
    cy.get('#LoginLink').click();
    cy.get('#username').type(userName);
    cy.get('#password').type(password);
    cy.get('.btn').click();
    cy.get('.btn').should('be.visible').contains('Logout')
  }
})