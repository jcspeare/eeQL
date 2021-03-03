import React, { useState } from 'react';

let state: any = {}
//create init state w/ empty string
export const TestState = React.createContext(state);
//create handler that can edit string w/ user input 

//initial state
const TestProviders = ({ children }: any) => {
    const [expectedResult , setResult] = useState('InitialString');
//handler that changes it
    const testHandler = (TestValue: string):void => {
        setResult(TestValue)
        console.log(TestValue)
    };
    
return (
    <TestState.Provider
        value={{
        expectedResult,
        testHandler
        }} >
    {children}
    </TestState.Provider>
)
}


export default TestProviders;