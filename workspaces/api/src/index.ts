import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

import routes from './routes';

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

//middlewares
app.use(bodyParser.json());

// route
app.use(routes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
