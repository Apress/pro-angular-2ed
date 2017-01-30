module.exports = (config) => {
    config.set({
        frameworks: ["jasmine"],
        plugins: [require("karma-jasmine"), require("karma-chrome-launcher")],

        files: [
            "node_modules/reflect-metadata/Reflect.js",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/zone.js/dist/zone.js",
            "node_modules/zone.js/dist/proxy.js",
            "node_modules/zone.js/dist/sync-test.js",
            "node_modules/zone.js/dist/jasmine-patch.js",
            "node_modules/zone.js/dist/async-test.js",
            "node_modules/zone.js/dist/fake-async-test.js",
            { pattern: "node_modules/rxjs/**/*.js", included: false, watched: false },
            { pattern: "node_modules/@angular/**/*.js", included: false, watched: false },

            { pattern: "app/**/*.js", included: false, watched: true },
            { pattern: "app/**/*.html", included: false, watched: true },
            { pattern: "app/**/*.css", included: false, watched: true },
            { pattern: "tests/**/*.js", included: false, watched: true },

            { pattern: "karma-test-shim.js", included: true, watched: true },
        ],
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        singleRun: false
    })
}
