module.exports = {
    moduleFileExtensions: ["ts", "tsx", "js"],
    collectCoverageFrom: [
        "**/*.{ts,tsx}",
        "!**/module.d.ts",
        "!**/*.stories.{ts,tsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/src/App.tsx",
        "!**/styles.ts",
        "!**/build/**",
        "!**/src/**/*.data.ts",
        "!**/src/**/*.test.ts", // test helper
    ],
    transform: {
        "\\.(ts|tsx)$": "ts-jest",
    },
    setupFiles: ["raf/polyfill"],
    testMatch: ["**/__tests__/**/*.{ts,tsx}"],
    testPathIgnorePatterns: ["/build/"],
    setupTestFrameworkScriptFile: "<rootDir>src/SetupTest.ts",
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$":
            "jest-transform-stub",
    },
};
