"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
function init() {
    var server = new server_1.default();
    server.listen();
}
init();
//# sourceMappingURL=app.js.map