import LoginPage from "../pages/LoginPage";


describe("LoginPage", () => {

  const loginpage = new LoginPage

  beforeEach(() => {
    loginpage.LaunchBrowser()
  })

  it("Verify user can't login with invalid credentials", () => {


    loginpage.EnterCredentials('username', 'password')

    loginpage.ClickLoginButton()


    cy.url().should('include', '/')


  });

  it("Verify User Can login with valid credentials", () => {


    loginpage.EnterCredentials('arabomeivan', 'Atleticomadrid_2.')
    loginpage.ClickLoginButton()
    cy.url().should('include', '/charts')
  });

  it("Verify Error Message displays when login fails", () => {


    loginpage.EnterCredentials('arabomeifvann', 'Atleticomadrid_2.')
    loginpage.ClickLoginButton()

    //Check the error message is displayed
    loginpage.VerifyLoginFailure().should('be.visible');
    loginpage.VerifyLoginFailure().invoke('text').then((text)=>{
      expect(text).to.equal('\n  Invalid username or password. Please try again.\n  ')
      cy.log(text)
    })



  });


})
