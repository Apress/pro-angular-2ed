# Errata for *Pro Angular*

## Errata for Angular 4 Chapters

**General**

The application contents may be unstyled if you install a later version of the `@angular-cli` package than specified in the setup chapter. 

To resolve this problem, you can either install version 1.0 of the `@angular-cli` package, as described in the chapters, or add an entry for the Bootstrap CSS file to the `styles` section of the `.angular-cli` file in the project folder, like this:

    ...
    "styles": [
         "styles.css", 
        "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
    ],
    ...

Save the file, run ng serve and reload your browser to see the styled content.


## Errata for All Chapters

**General**:

You may see errors like this one when you save changes to TypeScript files:

    node_modules/rxjs/Observable.d.ts(10,66): error TS2304: Cannot find name 'Promise'

To fix this problem, replace the tsconfig.json file with this one, which includes an additional configuration property called `lib`:

    {
      "compilerOptions": {
          "target": "es5",
          "module": "commonjs",
          "moduleResolution": "node",
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true,
          "lib": ["es2015", "dom"]    
        },
        "exclude": [ "node_modules" ]
    }

(Thanks to Leonard E James for reporting this problem).
(And thanks to Yisroel Lazerson for reporting an error in the original correction).

***
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
On **page 142**:

The code for removing a single item from the cart omits an argument when calling `splice` that means all items are removed. The `removeLine` method should be as follows:

    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

(Thanks to AndrewD14 for reporting this problem).

***
On **pages 145***:

The name of the module used by the `import` statement is incorrect and should be:

`import { CartSummaryComponent } from "./cartSummary.component";`

(Thanks to Alvaro Denis for reporting this problem).

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

(Thanks to Paul Lay for reporting this problem).
***
On **page 608**:

The URL at the top of the page should be http://localhost:3500/products/1. The original text omits the port number.

(Thanks to Paul Lay for reporting this problem).

***
In **Chapter 28**

The durations for animation transitions throughout this chapter contain spaces between the number and the unit, which prevents the browser from running the application. To resolve this problem, either use the source code from this repository or remove the spaces from the animation transition statements. For example, here is Listing 28-6 from page 728:

    import { trigger, style, state, transition, animate } from "@angular/core";
    export const HighlightTrigger = trigger("rowHighlight", [
        state("selected", style({
            backgroundColor: "lightgreen",
            fontSize: "20px"
        })),
        state("notselected", style({
            backgroundColor: "lightsalmon",
            fontSize: "12px"
        })),
        transition("selected => notselected", animate("200 ms")),
        transition("notselected => selected", animate("400 ms"))
    ]);

The two `transition` statements have spaces in the argument to the `animate` function: `200<space>ms` and `400<space>ms`. To correct this problem, remove the spaces, like this:

    ...
    transition("selected => notselected", animate("200ms")),
    transition("notselected => selected", animate("400ms"))
    ...

(Thanks to Paul Lay for being the first to report this problem).
