const fs = require('fs')
const convert = require('heic-convert')

const { promisify } = require('util')

async function convertHeicToJpg(inputPath, outputPath) {
    const inputBuffer = await promisify(fs.readFile)(inputPath)
    const outputBuffer = await convert({
        buffer: inputBuffer, // the HEIC file buffer
        format: 'JPEG', // output format
        quality: 1 // the jpeg compression quality, between 0 and 1
    })

    await promisify(fs.writeFile)(outputPath, outputBuffer)
}

module.exports = {
    convertHeicToJpg,
}