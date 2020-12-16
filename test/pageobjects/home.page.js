const Page = require('./page');

class HomePage extends Page {
    get searchBtn () { return $('.btn_search') }
    get fisicaBtn () { return $('label[for=ocupational]') }
    get searchTextfield () { return $('#search-input') }
    get placeholderText () { return $('input[placeholder="¿Buscas a alguien o algo en específico?"]') }

    open () {
        return super.open('/'); 
    }

    search () {
        this.searchBtn.click(); 
    }

    compare_url(){
        //browser.getUrl();
        expect(browser).toHaveUrl('https://develop.terapeutica.digital/#/')
        

    }

    fisica_option(){
        this.fisicaBtn.click()
    }

    textFeildFocused(){
        this.searchTextfield.isFocused()
    }

    verifyPlaceholder(){
       this.placeholderText.waitForExist({ timeout: 5000 });
       expect(this.placeholderText.isDisplayed())
       
    }

    sendText(username){
        this.searchTextfield.setValue(username);
        this.searchBtn.click();
    }
}

module.exports = new HomePage();
