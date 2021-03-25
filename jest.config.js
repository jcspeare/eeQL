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
    "moduleNameMapper": {
      "^.+\\.(css|less|scss)$": "babel-jest"
    },
    setupFilesAfterEnv: [
    './config-overrides.js'
      // "@testing-library/react/cleanup-after-each",
      // "@testing-library/jest-dom/extend-expect"
    ],

    // Sample regex
    // "(/__tests__/.*|(\\.|/)(test|spec))\\.js?$",  (/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$' ,  [ "/__tests__/.*\\.(ts|tsx|js),
  
    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",

    
    
  
    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
  };