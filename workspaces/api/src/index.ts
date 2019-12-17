import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const app = express();
const port = 8080;

app.get('/', (_, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
