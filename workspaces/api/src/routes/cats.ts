import { IRouter, Router } from 'express';

import randomDuo from '../controllers/cats/randomDuo';
import vote from '../controllers/cats/vote';
import scores from '../controllers/cats/scores';

const router: IRouter = Router();

router.get('/randomDuo', randomDuo);
router.post('/vote', vote);
router.get('/scores', scores);

export default router;
