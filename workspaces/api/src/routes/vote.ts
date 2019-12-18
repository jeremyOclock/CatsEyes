import { IRouter, Router } from 'express';
import getVotes from '../controllers/vote/getVotes';
import submitVote from '../controllers/vote/submitVote';

const router: IRouter = Router();

router.get('/', getVotes);
router.post('/', submitVote);

export default router;
