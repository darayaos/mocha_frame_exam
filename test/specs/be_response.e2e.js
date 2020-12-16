const SearchPage = require('../pageobjects/search.page');
const BE_Page = require('../pageobjects/be_response.page');
const { userInfo, Urls } = require('../helper/data.helper.js');

beforeEach(()=>{
    browser.url('https://develop.terapeutica.digital/#/search');
})


describe('Verificar la respuesta en el BE, POST & GET METHODS', () => {
            it('BE REPONSE', () => {
            let getprof = userInfo()
            SearchPage.sendText_user(getprof.firstName)
            browser.pause(1000); 
            browser.setupInterceptor(); 
            browser.expectRequest('POST', 'https://javito-stage.herokuapp.com/v1/specialists/search',200); 
            BE_Page.searchProf()
            browser.expectRequest('GET','https://javito-stage.herokuapp.com/v1/specialist/37378b04-4b69-452e-9fad-e83959388f41', 200);
            browser.pause(1000); 
            browser.assertRequests(); 
            });
        })
        