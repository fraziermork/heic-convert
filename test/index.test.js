const { program } = require('../src/')

test('program should be defined', () => {
    expect(program).toBeDefined()
    program.parse(['node', 'index.js', '-i', './README.md'])
})