import { Router } from 'express';
import loginRouter from './loginRouter';
import installmentRouter from './installmentRoutes';
import patientRouter from './patientRouter';
import procedureRouter from './procedureRouter';

const router = Router();

router.use('/login', loginRouter);
router.use('/installments', installmentRouter);
router.use('/patients', patientRouter);
router.use('/procedures', procedureRouter);

export default router;
