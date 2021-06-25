"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const Database_1 = __importDefault(require("./core/data/connections/Database"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
dotenv_1.default.config({
    path: '../.env'
});
const port = process.env.PORT || 8080;
new Database_1.default().openConnection().then(() => {
    app.listen(port, () => {
        console.log('api rodando');
    });
});
