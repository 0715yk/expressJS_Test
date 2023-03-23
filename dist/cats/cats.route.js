"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cats_service_1 = require("./cats.service");
var router = express_1.Router();
router.get("/cats", cats_service_1.readAllCat);
router.get("/cats/:id", cats_service_1.readOneCat);
router.post("/cats", cats_service_1.addCat);
router.put("/cats/:id", cats_service_1.updateOneCatAll);
router.patch("/cats/:id", cats_service_1.updateOneCatPartially);
router.delete("/cats/:id", cats_service_1.popoutCat);
exports.default = router;
//# sourceMappingURL=cats.route.js.map