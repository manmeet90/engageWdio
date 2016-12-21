function Page() {
}

Page.prototype.open = function(value) {
  browser.url('/' + value);
};

module.exports = new Page();
