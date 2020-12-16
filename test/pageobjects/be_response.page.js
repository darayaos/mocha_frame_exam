const Page = require('./page');

class BE_Page extends Page {


    get searchBtn () { return $(".strip_list > a") }
    //get verPerfil () { return $(".btn_listing") }

   

    open () {
        return super.open('/search');
    }

    searchProf(){
        this.searchBtn.click()
    }
}

module.exports = new BE_Page();