"use strict";
var Message = (function () {
    function Message(text, error, responses) {
        if (error === void 0) { error = false; }
        this.text = text;
        this.error = error;
        this.responses = responses;
    }
    return Message;
}());
exports.Message = Message;
