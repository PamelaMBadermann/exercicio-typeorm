"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StockController_1 = __importDefault(require("../controllers/StockController"));
class StockRoutes {
    init() {
        const routes = express_1.Router();
        const controller = new StockController_1.default();
        routes.get('/stock', controller.index);
        routes.get('/stock/:id', controller.show);
        routes.post('/stock', controller.store);
        routes.put('/stock', controller.update);
        routes.delete('/stock/:id', controller.delete);
        return routes;
    }
}
exports.default = StockRoutes;
