const Page = require('./page');

class ResultsPage extends Page {

    get nameDisplayed () { return $('.col-lg-7 :first-child h3') }
}
module.exports = new ResultsPage();