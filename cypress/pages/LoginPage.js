class LoginPage{

  LaunchBrowser(){
    cy.visit('/')
  }

  EnterCredentials(username, password){
    cy.get('#username').type(username)
    cy.get('#password').type(password)
  }

  ClickLoginButton(){
    cy.get('#loginButton').click()
  }

  VerifyLoginFailure(){
   return cy.get('#errorMessage')
  }
}


export default LoginPage
