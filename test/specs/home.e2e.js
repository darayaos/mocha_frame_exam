const { userInfo, Urls } = require('../helper/data.helper.js');

const HomePage = require('../pageobjects/home.page');
const ResultsPage = require('../pageobjects/resultado.page');

//const SecurePage = require('../pageobjects/secure.page');

describe('This is my exam -> Daniel Araya Lopez', () => {

    before(()=>{
        HomePage.open();
    })
    
    it('Test Case 1.A', () => {
        HomePage.search();
        HomePage.compare_url();
    });

    it('Test Case 1.B', () => {
        HomePage.fisica_option();
        HomePage.textFeildFocused();
        HomePage.verifyPlaceholder();
    });

    it('Test Case 1.C', () => {
        let compareInfo = userInfo()
        HomePage.sendText(compareInfo.prof_name)
        ResultsPage.nameDisplayed.waitForExist({ timeout: 5000 });
        expect(ResultsPage.nameDisplayed).toHaveTextContaining(compareInfo.firstName)
    });

});


