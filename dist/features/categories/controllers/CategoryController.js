"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Database_1 = __importDefault(require("../../../core/data/connections/Database"));
class CategoryController {
    async index(request, response) {
        const connection = new Database_1.default().getConnection();
        const categories = await connection.query('SELECT * FROM exercicio2406.category');
        return response.json(categories);
    }
    async show(request, response) {
        const { uid } = request.params;
        const connection = new Database_1.default().getConnection();
        const category = await connection.query('select * from exercicio2406.category WHERE uid = $1', [uid]);
        return response.json(category).status(200);
    }
    async store(request, response) {
        const { nome, descricao, tag } = request.body;
        const connection = new Database_1.default().getConnection();
        const result = await connection.query('INSERT INTO exercicio2406.category () VALUES ($1, $2, $3, $4)', [uuid_1.v4(), nome, descricao, tag]);
        return response.json(result).status(200);
    }
    async update(request, response) {
        const { uid } = request.params;
        const { nome, descricao, tag } = request.body;
        const connection = new Database_1.default().getConnection();
        const result = await connection.query('UPDATE exercicio2406.category SET nome = $1, descricao = $2, tag = $3 WHERE uid = $4', [nome, descricao, tag]);
        return response.json(result).status(200);
    }
    async delete(request, response) {
        const { uid } = request.params;
        const connection = new Database_1.default().getConnection();
        await connection.query('DELETE FROM exercicio2406.category WHERE uid = $1', [uid]);
        return response.status(204);
    }
}
exports.default = CategoryController;
