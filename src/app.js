import express from 'express';
import './config/env_connection.js';

//routefiles
import productsRoute from './routes/productsRoutes.js'
import catalogRoute from './routes/webhookRoutes.js'
import orderRoute from './routes/orderRoutes.js'

const app = express();

// Middleware
app.use(express.json());
// Routes
app.use('/api/products/',productsRoute)
app.use('/api/webhook/', catalogRoute)
app.use('/api/orders/', orderRoute)

// Express app setup, middleware, route mounting

export default app;
