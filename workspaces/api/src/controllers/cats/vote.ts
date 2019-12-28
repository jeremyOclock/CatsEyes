import { RequestHandler } from 'express';
import Cat from '../../models/Cat';
import { ErrorMessage } from '../../types/responses';
import { IVoteInput } from '../../types/vote';

const Vote: RequestHandler = async (req, res) => {
  const { id }: IVoteInput = req.body;

  const cat = await Cat.findOne({ _id: id });

  try {
    if (cat) {
      await cat.updateOne({ $set: { score: +cat.score + 1 } });
    } else {
      const error: ErrorMessage = { message: 'Cat not found' };
      res.status(404).send(error);
    }
  } catch (e) {
    const error: ErrorMessage = { message: 'Could not update cat score' };
    res.status(500).send(error);
  }

  res.sendStatus(201);
};

export default Vote;
