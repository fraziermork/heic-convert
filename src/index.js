#!/usr/bin/env node

const { Command } = require('commander')

const program = new Command();

program
    // .command('convert')
    // .description('Convert a file from .HEIC to .jpg')
    .option('-i, --input <path>', 'Input file path')
    .action((options) => {
        console.log('Convert command called with:', options)
    })

module.exports = { program }
