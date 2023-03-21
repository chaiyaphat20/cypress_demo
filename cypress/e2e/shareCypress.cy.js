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

  function login(userName,password){
    cy.visit('https://acetoys.uk/our-story');
    cy.get('#LoginLink').click();
    cy.get('#username').type(userName);
    cy.get('#password').type(password);
    cy.get('.btn').click();
    cy.get('.btn').should('be.visible').contains('Logout')
  }
})