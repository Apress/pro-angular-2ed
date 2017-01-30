"use strict";
var LimitValidator = (function () {
    function LimitValidator() {
    }
    LimitValidator.Limit = function (limit) {
        return function (control) {
            var val = Number(control.value);
            if (val != NaN && val > limit) {
                return { "limit": { "limit": limit, "actualValue": val } };
            }
            else {
                return null;
            }
        };
    };
    return LimitValidator;
}());
exports.LimitValidator = LimitValidator;
