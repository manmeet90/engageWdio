var Page = require('./page');

var LoginPage = Object.create(Page, {
	username: {
		get: function () {
			return browser.element('#j_id0\\:j_id1\\:j_id15\\:username');
		}
	},
	password: {
		get: function () {
			return browser.element('[name=j_id0\\:j_id1\\:j_id15\\:j_id23]');
		}
	},
	loginBtn: {
		get: function () {
			return browser.element('#j_id0\\:j_id1\\:j_id15\\:submit');
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
