module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/controllers/*.ts'
    ],
    coverageDirectory: 'coverage',
    testEnviroment: 'node',
    coverageReporters: [
        'text-summary',
        'lcov'
    ],
    preset: 'ts-jest',    
    testMatch: ['<rootDir>/src/tests/*.spec.ts'],    
}