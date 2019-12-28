import { Schema, model, Document } from 'mongoose';

export interface ICat extends Document {
  score: number;
  image: string;
}

const catSchema = new Schema({
  score: { type: Number, required: true },
  image: { type: String, required: true }
});

export default model<ICat>('Cat', catSchema);
