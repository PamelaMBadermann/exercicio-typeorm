import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import Database from '../../../core/data/connections/Database';

export default class CategoryController {

    public async index(request: Request, response: Response) {
        const connection = new Database().getConnection();
        const categories = await connection.query('SELECT * FROM exercicio2406.category');
    
        return response.json(categories);
    }

    public async show(request: Request, response: Response) {
        const { uid } = request.params;
        const connection = new Database().getConnection();
        const category = await connection.query('select * from exercicio2406.category WHERE uid = $1', [uid]);

        return response.json(category).status(200);
    }

    public async store(request: Request, response: Response) {
        const { nome, descricao, tag } = request.body;
        const connection = new Database().getConnection();
        const result = await connection.query('INSERT INTO exercicio2406.category () VALUES ($1, $2, $3, $4)', [uuid(), nome, descricao, tag]);
        
        return response.json(result).status(200);
    }

    public async update(request: Request, response: Response) {
        const { uid } = request.params;
        const { nome, descricao, tag } = request.body;
        const connection = new Database().getConnection();

        const result = await connection.query('UPDATE exercicio2406.category SET nome = $1, descricao = $2, tag = $3 WHERE uid = $4', 
            [nome, descricao, tag]);


        return response.json(result).status(200);
    }

    public async delete(request: Request, response: Response) {
        const { uid } = request.params;
        const connection = new Database().getConnection();
        await connection.query('DELETE FROM exercicio2406.category WHERE uid = $1', [uid]);
    
        return response.status(204);
    }    
}