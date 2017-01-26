var Page = require('./page');

var LoginPage = Object.create(Page, {
	username: {
		get: function () {
			return browser.element('input[id*="username"]');
		}
	},
	password: {
		get: function () {
			return browser.element('input[type="password"]');
		}
	},
	loginBtn: {
		get: function () {
			return browser.element('input[type="submit"]');
		}
	},
	errorMsg: {
		get: function () {
			return browser.element('.error-msg');
		}
	},
	open: {
		value: function () {
			Page.open.call(this, 'fmplogin');
		}
	},
	submit: {
		value: function () {
			this.loginBtn.click();
		}
	}
});

module.exports = LoginPage;
