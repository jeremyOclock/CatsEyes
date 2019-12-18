import { RequestHandler } from 'express';
import Cat from '../../models/Cat';
import { ErrorMessage } from '../../types/responses';
import { ISubmitVoteInput } from 'src/types/vote';

const submitVote: RequestHandler = async (req, res) => {
  const { id }: ISubmitVoteInput = req.body;

  const cat = await Cat.findOne({ originalID: id });

  try {
    if (cat) {
      await cat.updateOne({ $set: { score: +cat.score + 1 } });
    } else {
      const newCat = new Cat({ originalID: id, score: 1 });
      await newCat.save();
    }
  } catch (e) {
    const error: ErrorMessage = { message: 'Could not update cat score' };
    res.status(500).send(error);
  }

  res.sendStatus(201);
};

export default submitVote;
