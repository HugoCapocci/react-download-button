module.exports = {
    bail: true,
    collectCoverage: true,
    verbose: true,
    moduleFileExtensions: [
      'js',
      'jsx'
    ],
    coveragePathIgnorePatterns: [
      'test'
    ],
    setupFilesAfterEnv: [
      './test/enzymeSetup.js'
    ]
}
