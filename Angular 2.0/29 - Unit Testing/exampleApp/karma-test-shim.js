__karma__.loaded = function () { };

let map = { "rxjs": "node_modules/rxjs" };

var angularModules = ["common", "compiler", "core", "platform-browser",
    "platform-browser-dynamic", "forms", "http", "router"];

angularModules.forEach(module => {
    map[`@angular/${module}`] =
        `node_modules/@angular/${module}/bundles/${module}.umd.js`;
    map[`@angular/${module}/testing`] =
        `node_modules/@angular/${module}/bundles/${module}-testing.umd.js`
});

System.config({ baseURL: "/base", map: map, defaultJSExtensions: true });

Promise.all([
  System.import("@angular/core/testing"),
  System.import("@angular/platform-browser-dynamic/testing")

]).then(providers => {
    var testing = providers[0];
    var testingBrowser = providers[1];

    testing.TestBed.initTestEnvironment(testingBrowser.BrowserDynamicTestingModule,
      testingBrowser.platformBrowserDynamicTesting());

}).then(() => Promise.all(Object.keys(window.__karma__.files)
    .filter(name => name.endsWith("spec.js"))
    .map(moduleName => System.import(moduleName))))
.then(__karma__.start, __karma__.error);
