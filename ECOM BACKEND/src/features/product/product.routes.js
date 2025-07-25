// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import ProductController from './product.controller.js';
import { upload } from '../../middlewares/fileupload.middleware.js';

// 2. Initialize Express router.
const productRouter = express.Router();

const productController = new ProductController();

// All the paths to controller methods.
// localhost/api/products

// localhost:4100/api/products/filter?minPrice=10&maxPrice=20&category=Category1
productRouter.post(
  '/rate',
  productController.rateProduct
);
productRouter.get(
  '/filter',
  productController.filterProducts
);
productRouter.get(
  '/',
  (req,res) =>{
    productController.getAllProducts(req, res)}
);
productRouter.post(
  '/',
  upload.single('imageUrl'),
  (req,res) =>{
    productController.addProduct(req, res)}
);
  

productRouter.get(
  '/:id',
  (req,res) =>{
    productController.getOneProduct(req, res)}
);

export default productRouter;
