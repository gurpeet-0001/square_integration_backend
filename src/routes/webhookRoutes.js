import {Router} from 'express'
import { webhookCatalogUpdated } from '../controllers/webhookController.js';
const router = Router();

router.post('/catalogupdated', webhookCatalogUpdated);

export default router