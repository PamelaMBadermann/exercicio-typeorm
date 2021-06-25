import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

export default class CategoryRoutes {

    public init(): Router {
        const routes = Router();
        const controller = new CategoryController();

        routes.get('/categories', controller.index);
        routes.get('/categories/:id', controller.show);
        routes.post('/categories', controller.store);
        routes.put('/categories', controller.update);
        routes.delete('/categories/:id', controller.delete);

        return routes;
    }
}