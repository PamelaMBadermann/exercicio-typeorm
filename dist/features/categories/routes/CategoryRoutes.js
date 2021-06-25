"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
class CategoryRoutes {
    init() {
        const routes = express_1.Router();
        const controller = new CategoryController_1.default();
        routes.get('/categories', controller.index);
        routes.get('/categories/:id', controller.show);
        routes.post('/categories', controller.store);
        routes.put('/categories', controller.update);
        routes.delete('/categories/:id', controller.delete);
        return routes;
    }
}
exports.default = CategoryRoutes;
