import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as mongoose from 'mongoose';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const connectionString = process.env.CONNECTION_STRING;

if (connectionString) {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} else {
  throw new Error('Your connection string is undefined');
}

const app = express();
const port = 8080;

app.get('/', (_, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
