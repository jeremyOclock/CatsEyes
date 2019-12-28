import { IRouter, Router } from 'express';

import cats from './cats';

const router: IRouter = Router();

router.use('/cats', cats);

export default router;
