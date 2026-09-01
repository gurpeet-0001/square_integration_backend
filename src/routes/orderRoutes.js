import { Router } from 'express'
const router = Router();

// controllers
// import { createOrder, listOrders, getOrder } from '../controllers/orderController.js';


// List orders (for location XXXX)
router.get('/', (req,res)=>{
    res.send('this is orders route')
});


export default router