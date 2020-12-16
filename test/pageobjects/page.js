
module.exports = class Page {
    open (path) {
        return browser.url(`https://develop.terapeutica.digital/#${path}`)
    }
}
