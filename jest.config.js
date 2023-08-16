module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/controllers/*.ts'
    ],
    coverageDirectory: 'coverage',
    testEnviroment: 'node',
    testMatch: ['<rootDir>/src/tests/*.spec.ts'],
    coverageReporters: [
        'test-summary',
        'lcov'
    ],
    preset: 'ts-jest',    
}