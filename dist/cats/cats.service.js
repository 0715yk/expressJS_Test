"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.popoutCat = exports.updateOneCatPartially = exports.updateOneCatAll = exports.addCat = exports.readOneCat = exports.readAllCat = void 0;
var cats_model_1 = require("./cats.model");
var utils_1 = require("./utils");
var uuid_1 = require("uuid");
var express_1 = require("express");
var router = express_1.Router();
var readAllCat = function (req, res) {
    try {
        var cats = cats_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readAllCat = readAllCat;
var readOneCat = function (req, res) {
    try {
        var catId = req.params.id;
        var catData = utils_1.findCat(catId);
        res.status(200).send({ success: true, data: { cat: catData } });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readOneCat = readOneCat;
var addCat = function (req, res) {
    try {
        var data = req.body;
        var uuid = uuid_1.v4();
        data.id = uuid;
        utils_1.createCat(data);
        res.status(201).send({ success: true, data: { cat: data } });
    }
    catch (error) {
        res.status(400).send({ success: false, error: error.message });
    }
};
exports.addCat = addCat;
var updateOneCatAll = function (req, res) {
    try {
        var catId = req.params.id;
        var data = req.body;
        var putData = utils_1.putCat(catId, data);
        res.status(200).send({ success: true, data: { cat: putData } });
    }
    catch (error) {
        res.status(400).send({ success: false, error: error.message });
    }
};
exports.updateOneCatAll = updateOneCatAll;
var updateOneCatPartially = function (req, res) {
    try {
        var data = req.body;
        var catId = req.params.id;
        var patchedData = utils_1.patchCat(catId, data);
        res.status(200).send({ success: true, cat: patchedData });
    }
    catch (error) {
        res.status(400).send({ success: false, error: error.message });
    }
};
exports.updateOneCatPartially = updateOneCatPartially;
var popoutCat = function (req, res) {
    try {
        var catId = req.params.id;
        utils_1.deleteCat(catId);
        res.status(200).send({ success: true, data: cats_model_1.Cat });
    }
    catch (error) {
        res.status(400).send({ success: false, error: error.message });
    }
};
exports.popoutCat = popoutCat;
exports.default = router;
//# sourceMappingURL=cats.service.js.map