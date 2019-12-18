import { Schema, model, Document } from 'mongoose';

export interface ICat extends Document {
  originalID: string;
  score: number;
}

const catSchema = new Schema({
  originalID: { type: String, required: true, unique: true },
  score: { type: Number, required: true }
});

export default model<ICat>('Cat', catSchema);
