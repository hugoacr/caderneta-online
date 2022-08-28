import { Router } from 'express';
import loginRouter from './loginRouter';
import installmentRouter from './installmentRoutes';

const router = Router();

router.use('/login', loginRouter);
router.use('/installments', installmentRouter);

export default router;
