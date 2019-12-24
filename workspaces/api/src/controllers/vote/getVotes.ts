import { RequestHandler } from 'express';
import Cat from '../../models/Cat';

const getVotes: RequestHandler = async (req, res) => {
  let { page, limit } = req.query;

  limit = +limit || 50;
  page = +page ? limit * (+page - 1) : 0;

  try {
    const cats = await Cat.find({})
      .skip(page)
      .limit(limit)
      .sort({ score: 'desc' });

    if (!cats || !cats.length) throw null;

    res.send(cats);
  } catch {
    res.status(404).send('No cat(s) found');
  }
};

export default getVotes;
