#!/usr/bin/env node

const { program } = require('commander')

program
    .command('convert')
    .description('Convert a file from .HEIC to .jpg')
    .option('-i, --input <path>', 'Input file path')
    .action((options) => {
        console.log('Convert command called with:', options)
    })

program.parse(process.argv)

// node index.js convert -i ./README.md
// Convert command called with: { input: './README.md' }