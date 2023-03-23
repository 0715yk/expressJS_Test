"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cats_route_1 = __importDefault(require("../cats/cats.route"));
var Server = (function () {
    function Server() {
        this.app = express_1.default();
    }
    Server.prototype.setRoute = function () {
        this.app.use(cats_route_1.default);
    };
    Server.prototype.setMiddleware = function () {
        this.app.use(function (req, res, next) {
            console.log(req.rawHeaders[1]);
            console.log("this is middleware");
            next();
        });
        this.app.use(express_1.default.json());
        this.setRoute();
        this.app.use(function (req, res, next) {
            console.log("this is the end");
            res.send({ error: "404 not found error" });
        });
    };
    Server.prototype.listen = function () {
        this.setMiddleware();
        this.app.listen(8000, function () {
            console.log("server is on...");
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=index.js.map