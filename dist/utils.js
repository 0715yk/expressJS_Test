"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCat = exports.findCat = void 0;
var app_model_1 = require("./app.model");
var findCat = function (id) {
    var catData = app_model_1.Cat.find(function (cat) {
        return cat.id === id;
    });
    return catData;
};
exports.findCat = findCat;
var createCat = function (catInform) {
    app_model_1.Cat.push(catInform);
};
exports.createCat = createCat;
//# sourceMappingURL=utils.js.map