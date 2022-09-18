#!/usr/bin/env node

// import boxen from 'boxen';
// import chalk from 'chalk';

const chalk = require('chalk');
const boxen = require('boxen');

const h = chalk.bold.hex("#A62349");
const w = chalk.white;
const g = chalk.hex("#42855B");
const m = chalk.hex('#6F38C5');

const cardOptions = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: "#AD8B73"
};

const content = `${h("Soham Datta")}
${w("Computer Science Student from India")}
${w("Interested in Web Development and learning new things.")}

${h("Technologies")}
${w("Python, Javascript, Reactjs, C++, Go")}

${g("GitHub")}             ${m("https://github.com/sohamdata")}
${g("LinkedIn")}           ${m("https://linkedin.com/in/~soham/")}
${g("Email")}              ${m("sohamdatta34@gmail.com")}`;

const card = boxen(content, cardOptions);

console.log(card);