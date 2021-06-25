"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Database_1 = __importDefault(require("../../../core/data/connections/Database"));
class ProductController {
    async index(request, response) {
        const connection = new Database_1.default().getConnection();
        const products = await connection.query('SELECT * FROM exercicio2406.product');
        return response.json(products);
    }
    async show(request, response) {
        const { uid } = request.params;
        const connection = new Database_1.default().getConnection();
        const product = await connection.query('select * from exercicio2406.product WHERE uid = $1', [uid]);
        return response.json(product).status(200);
    }
    async store(request, response) {
        const { nome, descricao } = request.body;
        const connection = new Database_1.default().getConnection();
        const result = await connection.query('INSERT INTO exercicio2406.product () VALUES ($1, $2, $3, $4)', [uuid_1.v4(), nome, descricao]);
        return response.json(result).status(200);
    }
    async update(request, response) {
        const { uid } = request.params;
        const { nome, descricao } = request.body;
        const connection = new Database_1.default().getConnection();
        const result = await connection.query('UPDATE exercicio2406.product SET nome = $1, descricao = $2 WHERE uid = $3', [nome, descricao]);
        return response.json(result).status(200);
    }
    async delete(request, response) {
        const { uid } = request.params;
        const connection = new Database_1.default().getConnection();
        await connection.query('DELETE FROM exercicio2406.product WHERE uid = $1', [uid]);
        return response.status(204);
    }
}
exports.default = ProductController;
