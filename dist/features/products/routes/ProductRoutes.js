"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
class ProductRoutes {
    init() {
        const routes = express_1.Router();
        const controller = new ProductController_1.default();
        routes.get('/products', controller.index);
        routes.get('/products/:id', controller.show);
        routes.post('/products', controller.store);
        routes.put('/products', controller.update);
        routes.delete('/products/:id', controller.delete);
        return routes;
    }
}
exports.default = ProductRoutes;
