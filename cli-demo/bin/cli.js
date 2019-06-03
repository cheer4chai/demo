#!/usr/bin/env node
const welcome = require('../index').welcome;
const program = require('commander');

program
    .option('-d, --debug', 'output extra debugging')

// 运行命令
program
    .parse(process.argv);

if (program.debug) console.log(program.opts());

welcome();