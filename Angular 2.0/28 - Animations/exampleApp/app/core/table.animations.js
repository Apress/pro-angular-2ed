"use strict";
var core_1 = require("@angular/core");
var animationUtils_1 = require("./animationUtils");
exports.HighlightTrigger = core_1.trigger("rowHighlight", [
    core_1.state("selected", core_1.style(animationUtils_1.getStylesFromClasses(["bg-success", "h2"]))),
    core_1.state("notselected", core_1.style(animationUtils_1.getStylesFromClasses("bg-info"))),
    core_1.state("void", core_1.style({
        transform: "translateX(-50%)"
    })),
    core_1.transition("* => notselected", core_1.animate("200ms")),
    core_1.transition("* => selected", core_1.animate("400ms 200ms ease-in")),
    core_1.transition("void => *", core_1.animate("500ms"))
]);
