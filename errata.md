# Errata for *Pro Angular*

On **page 10**:

The commands required to install the type data should be:

    npm run typings -- install dt~core-js --save --global
    npm run typings -- install dt~node --save --global

***
On **page 114**:

The commands required to install the type data should be:

    npm run typings -- install dt~core-js --save --global
    npm run typings -- install dt~node --save --global

***
On **page 200**:

When you run the `npm run ngc` command, you may see an error like this:

`Error: Metadata version mismatch for module SportsStore/app/app.component.ts, found version 2, expected 1`

To fix this problem, add version `0.4.0` of the `@angular/tsc-wrapped` package to the `devDependencies` section of the `package.json` file, like this:

    "devDependencies": {
        "lite-server": "2.2.2",
        "typescript": "2.0.2",
        "typings": "1.3.2",
        "concurrently": "2.2.0",
        "systemjs-builder": "0.15.32",
        "json-server": "0.8.21",
        "jsonwebtoken": "7.1.9",
        "@angular/compiler-cli": "2.2.0",
        "rollup": "0.36.3",
        "rollup-plugin-node-resolve": "2.0.0",
        "rollup-plugin-commonjs": "5.0.5",
        "rollup-plugin-uglify": "1.0.1",
        "rollup-plugin-alias": "1.2.0",
        "@angular/tsc-wrapped": "0.4.0"       
    },

Save the package.json file and run the following command to install the package:

    npm install

The `npm run ngc` command should now work correctly.
