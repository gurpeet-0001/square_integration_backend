import express from 'express';
import './config/env_connection.js';

//routefiles
import catalogRoute from './routes/catalogRoutes.js'

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/catalog/',catalogRoute)
// Express app setup, middleware, route mounting

export default app;