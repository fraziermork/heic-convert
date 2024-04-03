const fs = require('fs')
const { convertHeicToJpg } = require('../src/convert')

const options = {
    input: './test/fixtures/test-image.HEIC',
    output: './test/fixtures/test-image.jpg',
}

beforeAll(() => {
    if (fs.existsSync(options.output)) {
        fs.unlinkSync(options.output)
    }  
})

afterAll(() => {
    if (fs.existsSync(options.output)) {
        fs.unlinkSync(options.output)
    }
})

test('should convert a file from .HEIC to .jpg', async () => {
    await convertHeicToJpg(options.input, options.output)
    expect(fs.existsSync(options.output)).toBe(true)
})