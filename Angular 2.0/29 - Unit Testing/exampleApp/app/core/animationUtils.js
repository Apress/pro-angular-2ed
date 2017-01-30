"use strict";
function getStylesFromClasses(names, elementType) {
    if (elementType === void 0) { elementType = "div"; }
    var elem = document.createElement(elementType);
    (typeof names == "string" ? [names] : names).forEach(function (c) { return elem.classList.add(c); });
    var result = {};
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        var rules = sheet.rules || sheet.cssRules;
        for (var j = 0; j < rules.length; j++) {
            if (rules[j].type == CSSRule.STYLE_RULE) {
                var styleRule = rules[j];
                if (elem.matches(styleRule.selectorText)) {
                    for (var k = 0; k < styleRule.style.length; k++) {
                        result[styleRule.style[k]] =
                            styleRule.style[styleRule.style[k]];
                    }
                }
            }
        }
    }
    return result;
}
exports.getStylesFromClasses = getStylesFromClasses;
