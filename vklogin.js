//==============================================================================
// Casper generated Sun Sep 09 2012 15:10:21 GMT+0400 (MSK)
//==============================================================================

var x = require('casper').selectXPath;
var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});
casper.options.viewportSize = {width: 1366, height: 632};
casper.start('http://vk.com/');
casper.waitForSelector("form[name=login] input[name='email']",
    function success() {
        this.test.assertExists("form[name=login] input[name='email']");
        this.click("form[name=login] input[name='email']");
    },
    function fail() {
        this.test.assertExists("form[name=login] input[name='email']");
});
casper.waitForSelector("form[name=login] input[name='email']",
    function success() {
        this.test.assertExists("form[name=login] input[name='email']");
        this.click("form[name=login] input[name='email']");
    },
    function fail() {
        this.test.assertExists("form[name=login] input[name='email']");
});
casper.waitForSelector("form[name=login]",
    function success() {
        this.fill("form[name=login]", {"email": "new_finger@mail.ru"});
    },
    function fail() {
        this.test.assertExists("form[name=login]");
});
casper.waitForSelector("form[name=login]",
    function success() {
        this.fill("form[name=login]", {"pass": "fvgq6fnnw"});
    },
    function fail() {
        this.test.assertExists("form[name=login]");
});

casper.waitForSelector("#quick_login_button",
    function success() {
        this.test.assertExists("#quick_login_button");
        this.click("#quick_login_button");
    },
    function fail() {
        this.test.assertExists("#quick_login_button");
});

// submit form
casper.then(function() {
    this.mouse.click(309, 157);
});

casper.run(function() {this.test.renderResults(true);});