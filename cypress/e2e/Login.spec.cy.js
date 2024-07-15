import LoginPage from "../pages/LoginPage";


describe("LoginPage", () => {

  const loginpage = new LoginPage

  it("Verify User Can Login", () => {


    loginpage.LaunchBrowser();

    loginpage.EnterCredentials('username', 'password')
  });



})
