"use strict";
let arr10 = ["html", "css", "js", "ts"];
var Skills;
(function (Skills) {
    Skills[Skills["html"] = 0] = "html";
    Skills[Skills["css"] = 1] = "css";
    Skills[Skills["js"] = 2] = "js";
    Skills[Skills["ts"] = 3] = "ts";
})(Skills || (Skills = {}));
console.log(arr10[Skills.html]);
console.log(arr10[Skills.css]);
console.log(arr10[Skills.js]);
console.log(arr10[Skills.ts]);
