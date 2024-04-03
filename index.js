#!/usr/bin/env node

const { program } = require('./src/')

program.parse(process.argv)

// node index.js -i ./README.md
// Convert command called with: { input: './README.md' }