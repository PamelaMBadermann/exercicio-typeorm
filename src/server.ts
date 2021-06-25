import express, { Request, Response } from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';
import CategoryRoutes from './features/categories/routes/CategoryRoutes';
import ProductRoutes from './features/products/routes/ProductRoutes';
import StockRoutes from './features/stock/routes/StockRoutes';
import Database from './core/data/connections/Database';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config({
    path: '../.env'
});

const port = process.env.PORT || 8080;

new Database().openConnection().then(() => {
    app.listen(port, () => {
        console.log('api rodando')
    });
});