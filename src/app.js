import express from 'express';
import './config/env_connection.js';

//routefiles
import productsRoute from './routes/productsRoutes.js'

const app = express();

// Middleware
app.use(express.json());
// Routes
app.use('/api/catalog/',productsRoute)
// Express app setup, middleware, route mounting

export default app;