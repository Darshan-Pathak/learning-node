// Importing the chalk package
// const chalk = require("chalk");
import chalk from 'chalk';

// Styling text with chalk
const styledText =
  chalk.blue.bold("Hello, ") + chalk.red("World") + chalk.green("!");
console.log(styledText);
