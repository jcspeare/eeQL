module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ["<rootDir>"],
  
    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    
    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    

    //transpiling scss to a format readable by jest
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "babel-jest",
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
    },

    setupFilesAfterEnv: [
    './config-overrides.js'
      // "@testing-library/react/cleanup-after-each",
      // "@testing-library/jest-dom/extend-expect"
    ],
  
    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",

    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
  };