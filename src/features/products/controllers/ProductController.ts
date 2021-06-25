import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import Database from '../../../core/data/connections/Database';

export default class ProductController {
    
    public async index(request: Request, response: Response) {
        const connection = new Database().getConnection();
        const products = await connection.query('SELECT * FROM exercicio2406.product');
    
        return response.json(products);
    }

    public async show(request: Request, response: Response) {
        const { uid } = request.params;
        const connection = new Database().getConnection();
        const product = await connection.query('select * from exercicio2406.product WHERE uid = $1', [uid]);

        return response.json(product).status(200);
    }
 
    public async store(request: Request, response: Response) {
        const { nome, descricao } = request.body;
        const connection = new Database().getConnection();
        const result = await connection.query('INSERT INTO exercicio2406.product () VALUES ($1, $2, $3, $4)', [uuid(), nome, descricao]);
        
        return response.json(result).status(200);
    }

    public async update(request: Request, response: Response) {
        const { uid } = request.params;
        const { nome, descricao } = request.body;
        const connection = new Database().getConnection();
        const result = await connection.query('UPDATE exercicio2406.product SET nome = $1, descricao = $2 WHERE uid = $3', [nome, descricao]);

        return response.json(result).status(200);
    }

    public async delete(request: Request, response: Response) {
        const { uid } = request.params;
        const connection = new Database().getConnection();
        await connection.query('DELETE FROM exercicio2406.product WHERE uid = $1', [uid]);
    
        return response.status(204);
    }
    
}