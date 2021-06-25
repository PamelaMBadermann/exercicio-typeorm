import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import Database from '../../../core/data/connections/Database';

export default class StockController {
    
    public async index(request: Request, response: Response) {
        const connection = new Database().getConnection();
        const stock = await connection.query('SELECT * FROM exercicio2406.stock');
    
        return response.json(stock);
    }

    public async show(request: Request, response: Response) {
        const { uid } = request.params;
        const connection = new Database().getConnection();
        const stock = await connection.query('select * from exercicio2406.stock WHERE uid = $1', [uid]);

        return response.json(stock).status(200);
    }

    public async store(request: Request, response: Response) {
        const { uid, produto_uid, quantidade } = request.body;
        const connection = new Database().getConnection();
        const result = await connection.query('INSERT INTO exercicio2406.stock () VALUES ($1, $2, $3)', [uuid(), produto_uid, quantidade]);
        
        return response.json(result).status(200);
    }

    public async update(request: Request, response: Response) {
        const { uid } = request.params;
        const { produto_uid, quantidade } = request.body;
        const connection = new Database().getConnection();
        const result = await connection.query('UPDATE exercicio2406.stock SET nome = $1, descricao = $2, tag = $3 WHERE uid = $4', 
            [produto_uid, quantidade]);

        return response.json(result).status(200);
    }

    public async delete(request: Request, response: Response) {
        const { uid } = request.params;
        const connection = new Database().getConnection();
        await connection.query('DELETE FROM exercicio2406.stock WHERE uid = $1', [uid]);
    
        return response.status(204);
    }    
}