const express = require('express');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const app = express();

const buildPath = path.join(__dirname, '../build');
const port = process.env.PORT || 3000;

if (!fs.existsSync(buildPath)) {
  throw new Error(chalk.red('You need to build the app first'));
}

app.use(express.static(buildPath));

app.get('/*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () =>
  console.log(chalk.green(`App listening on port ${port}`))
);
