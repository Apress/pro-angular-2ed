(function (global) {

    var paths = {
        "@angular/*": "node_modules/@angular/*"
    }

    var packages = { "app": {} };

    var angularModules = ["common", "compiler",
     "core", "platform-browser", "platform-browser-dynamic",
     "forms", "http", "router"];

    angularModules.forEach(function (pkg) {
        packages["@angular/" + pkg] = {
            main: "/bundles/" + pkg + ".umd.min.js"
        };
    });

    System.config({ paths: paths, packages: packages });
})(this);
