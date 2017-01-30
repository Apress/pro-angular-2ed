"use strict";
var tempConverter_1 = require("./tempConverter");
var cities = {};
cities["London"] = ["raining", tempConverter_1.TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", tempConverter_1.TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", tempConverter_1.TempConverter.convertFtoC("23")];
for (var key in cities) {
    console.log(key + ": " + cities[key][0] + ", " + cities[key][1]);
}
