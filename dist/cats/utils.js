"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.patchCat = exports.putCat = exports.createCat = exports.findCat = void 0;
var cats_model_1 = require("./cats.model");
var findCat = function (id) {
    var catData = cats_model_1.Cat.find(function (cat) {
        return cat.id === id;
    });
    return catData;
};
exports.findCat = findCat;
var createCat = function (catInform) {
    cats_model_1.Cat.push(catInform);
};
exports.createCat = createCat;
var putCat = function (catId, newCatInform) {
    var result = null;
    Object.assign(cats_model_1.Cat, cats_model_1.Cat.map(function (cat, idx) {
        if (cat.id === catId) {
            result = idx;
            return __assign(__assign({}, cat), newCatInform);
        }
        else {
            return cat;
        }
    }));
    if (result !== null) {
        return cats_model_1.Cat[result];
    }
    else {
        return null;
    }
};
exports.putCat = putCat;
var patchCat = function (catId, newCatInform) {
    var result = null;
    Object.assign(cats_model_1.Cat, cats_model_1.Cat.map(function (cat, idx) {
        if (cat.id === catId) {
            result = idx;
            return __assign(__assign({}, cat), newCatInform);
        }
        else {
            return cat;
        }
    }));
    if (result !== null) {
        return cats_model_1.Cat[result];
    }
    else {
        return null;
    }
};
exports.patchCat = patchCat;
var deleteCat = function (catId) {
    Object.assign(cats_model_1.Cat, cats_model_1.Cat.filter(function (cat) {
        return cat.id !== catId;
    }));
};
exports.deleteCat = deleteCat;
//# sourceMappingURL=utils.js.map