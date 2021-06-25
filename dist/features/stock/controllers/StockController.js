"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Database_1 = __importDefault(require("../../../core/data/connections/Database"));
class StockController {
    async index(request, response) {
        const connection = new Database_1.default().getConnection();
        const stock = await connection.query('SELECT * FROM exercicio2406.stock');
        return response.json(stock);
    }
    async show(request, response) {
        const { uid } = request.params;
        const connection = new Database_1.default().getConnection();
        const stock = await connection.query('select * from exercicio2406.stock WHERE uid = $1', [uid]);
        return response.json(stock).status(200);
    }
    async store(request, response) {
        const { uid, produto_uid, quantidade } = request.body;
        const connection = new Database_1.default().getConnection();
        const result = await connection.query('INSERT INTO exercicio2406.stock () VALUES ($1, $2, $3)', [uuid_1.v4(), produto_uid, quantidade]);
        return response.json(result).status(200);
    }
    async update(request, response) {
        const { uid } = request.params;
        const { produto_uid, quantidade } = request.body;
        const connection = new Database_1.default().getConnection();
        const result = await connection.query('UPDATE exercicio2406.stock SET nome = $1, descricao = $2, tag = $3 WHERE uid = $4', [produto_uid, quantidade]);
        return response.json(result).status(200);
    }
    async delete(request, response) {
        const { uid } = request.params;
        const connection = new Database_1.default().getConnection();
        await connection.query('DELETE FROM exercicio2406.stock WHERE uid = $1', [uid]);
        return response.status(204);
    }
}
exports.default = StockController;
