var casper = require('casper').create();

casper.start('http://www.google.ru/', function() {
    this.test.assertTitle('Google', 'it\'s ok with google title');
    this.test.assertExists('form[action="/search"]', 'main form it\'s ok');
    this.fill('form[action="/search"]', {
	q: 'foo'
	}, true);
});

casper.then(function() {
    this.test.assertTitle('foo - Поиск в Google', 'title ok');
    this.test.assertUrlMatch(/q=foo/, 'search term has been submitted');
    this.test.assertEval(function() {
	return __utils__.findAll('h3.r').length >= 10;
    }, 'google search foo gives us more than 10 results');
});

casper.run(function() {
    this.test.renderResults(true);
});
