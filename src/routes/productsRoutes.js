import { Router } from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productsController.js';

const router = Router();

// GET all products
router.get('/', getProducts);

// GET product by ID
router.get('/:id', getProductById);

// POST create product
router.post('/', createProduct);

// PUT update product
router.put('/:id', updateProduct);

// DELETE product
router.delete('/:id', deleteProduct);

export default router;