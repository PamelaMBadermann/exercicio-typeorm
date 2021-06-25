import { Router } from 'express';
import ProductController from '../controllers/ProductController';

export default class ProductRoutes {
    
    public init(): Router {
        const routes = Router();
        const controller = new ProductController();

        routes.get('/products', controller.index);
        routes.get('/products/:id', controller.show);
        routes.post('/products', controller.store);
        routes.put('/products', controller.update);
        routes.delete('/products/:id', controller.delete);

        return routes;
    }
}