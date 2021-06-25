import { Router } from 'express';
import StockController from '../controllers/StockController';

export default class StockRoutes {
    
    public init(): Router {
        const routes = Router();
        const controller = new StockController();

        routes.get('/stock', controller.index);
        routes.get('/stock/:id', controller.show);
        routes.post('/stock', controller.store);
        routes.put('/stock', controller.update);
        routes.delete('/stock/:id', controller.delete);

        return routes;
    }
}