#!/usr/bin/env node

const { Command } = require('commander')
const { convertHeicToJpg } = require('./convert')

const program = new Command();

program
    .option('-i, --input <path>', 'Input file path')
    .option('-o, --output <path>', 'Output file path')
    .action(async (options) => {
        console.log('Convert command called with:', options)
        await convertHeicToJpg(options.input, options.output)
        console.log('Conversion completed')
    })

module.exports = { program }
