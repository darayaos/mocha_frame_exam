const SearchPage = require('../pageobjects/search.page');
const ResultsPage = require('../pageobjects/resultado.page');
const { userInfo, Urls } = require('../helper/data.helper.js');

describe('Proyecto UCreativa Dec 2020 -> Daniel Araya Lopez', () => {

    beforeEach(()=>{
        SearchPage.open();
    })

    it('2.A Click Especialidad Comparar URL', () => {
        SearchPage.special_1()
        SearchPage.url_1();
        SearchPage.special_2()
        browser.pause(1000)
        SearchPage.url_2();
    });
    it('2.B Resultado esperado por una persona en una especialidad', () => {
        let compareInfo = userInfo()
        SearchPage.special_3()
        SearchPage.sendText_user(compareInfo.prof_name)
        ResultsPage.nameDisplayed.waitForExist({ timeout: 5000 });
        expect(ResultsPage.nameDisplayed).toHaveTextContaining(compareInfo.firstName)
    });

    it('2.C Confirmo que el mapa no exites al dar click a la lista', () => {
        SearchPage.select_list();
    });

});