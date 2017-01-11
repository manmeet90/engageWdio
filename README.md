# Hello!

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

This repository is home to Fourth's Engage Automation effort, ~~currently~~ written in JavaScript, using the following tech stack:
* NodeJS and NPM
* Java
* Selenium WebDriver 3
* Chimp

In as few words as possible, Chimp is a capable test runner on top of WebDriverIO, using CucumberJS and the Jasmine assertion library, driving browsers through Selenium.

### Choices...

* We write the *.feature* files in Gherkin syntax, in order to best translate Rally Test Cases into actual automation. CucumberJS makes sense of the *Given / When / Then* steps.
* We write the *step definitions* in JavaScript, accessing the WebDriverIO API and the Chimp runner.
* We *aim* to drive all major browsers as well as PhantomJS, with the former through the open-sourced and industry-standard Selenium WebDriver 3.
* Chimp is able to drive **Appium**, for us to transition from Web-based tests to mobile device tests, as well.
* Due to native debugging, quality extensions and excellent Git integration, **VS Code** is the editor of choice.

### Enforcing coding style, project structure and editor environment

In order to have as much of a pleasant teamwork experience as possible, coding style will be dictated by an outside tool. The ESLint-based XO can be used for this, and is integrated into the current *package.json* and offers plug-ins for all important source code editors, including our choice of **VS Code**.

To establish the same editing environment, make sure:
* The latest [Visual Studio Code / VS Code](https://code.visualstudio.com/) is installed on your machine.
* Once installed, CMD + P and paste `ext install code-settings-sync`, to install the Settings Sync extension.
* Following its tutorial, make sure that [GitHub Gist ID `075052e8a1b9aba11dec89f8e4256dc0`](https://gist.github.com/danut-iosif/075052e8a1b9aba11dec89f8e4256dc0) is used as a Sync source, so that the same editing environment is established between us.

To grab the latest code from GitHub:
* `git clone https://github.com/fourth/engage-wdio.git`
* Checkout the `dev` branch.
* `npm install`
* `npm run test` will first check the code through *XO* and then start Chimp in `--watch` mode.

`--watch` mode will run Scenarios that are tagged with `@watch` and ignore those that are tagged with `@ignore`.
If you want to run a particular *.feature* file, you can manually execute `./node_modules/.bin/chimp config/chimp-local.js features/<feature_name>/<feature_name>.feature`

**All work is to be done by branching off of `dev`. All work, by the end of the Sprint, is to be merged back into `dev` through Pull Requests.**

Project structure is as follows:
* `config` will hold all the various configurations for Chimp.
* `features/<feature_name>` will hold all files for a specific "bucket" of Fourth Engage functionality. This includes the main *.feature* file(s) as well as the support *step definition .js* files.
* `pageobjects` will hold all Page Object Models, as *.js* files.
* `features/support` will hold global step definitions as well as any other support code.

Dotfiles, along with a compatible and sanely-set-up editor, will:
* *.editorconfig* - for all files, indentation is done with **tabs** ([please see this article on why that is](http://lea.verou.me/2012/01/why-tabs-are-clearly-superior/)), as well as establishing some other minor defaults for new files, in the editor.
* *.jsbeautifyrc* - configuration file for JS-Beautify.
* *package.json* - since XO is integrated in the project and the editor, please follow its style suggestions. Whenever in doubt, raise it up as an issue with the team.

## TODO

* Make sure that all newly-implemented as well as already-existing tests function on all planned browsers and PhantomJS.
* Integrate with BrowserStack, for parallel test execution on any browser / OS combination.
* Make VS Code's launch.json work to debug a running test.
* Clean up Page Objects and make sure that all selectors that matter are in Page Objects.
