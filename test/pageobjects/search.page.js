const Page = require('./page');
const { userInfo, Urls } = require('../helper/data.helper.js');

class SearchPage extends Page {

    get lenguajeBtn () { return $("//a[contains(text(),'Lenguaje')]") }
    get fisicaBtn () { return $("//a[contains(text(),'Física')]") }
    get ocupacionalBtn () { return $("//a[contains(text(),'Ocupacional')]") }
    get textfield_especialidad () { return $("#results .form-control") }
    get btnBuscar () { return $("[value='Buscar']") }
    get listBtn () { return $(".icon-th-list") }
    get mapBox () { return $(".normal_list stickybar") }

    
    
    open () {
        return super.open('/search');
    }
    special_1 (){
        this.lenguajeBtn.click()
        expect(this.lenguajeBtn.isFocused())
        browser.refresh()
    }
    special_2 (){
        this.fisicaBtn.click()
        expect(this.fisicaBtn.isFocused())
        browser.refresh()
    }
    url_1 (){
        let browser_url = Urls()
        expect(browser).toHaveUrl(browser_url.url_L)
    }

    url_2 (){
        let browser_url = Urls()
        expect(browser).toHaveUrl(browser_url.url_P)
    }

    special_3 (){
        this.ocupacionalBtn.click()
        expect(this.ocupacionalBtn.isFocused())
    }

    sendText_user(username){
        this.textfield_especialidad.setValue(username);
        this.btnBuscar.click();
    }

    select_list (){
        this.listBtn.click()
        expect(this.mapBox.waitForDisplayed({ reverse: true }));
       // browser.takeScreenshot();
    }
}
module.exports = new SearchPage();