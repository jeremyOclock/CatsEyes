import { RequestHandler } from 'express';

const getVotes: RequestHandler = (_, res) => res.send('from vote');

export default getVotes;
