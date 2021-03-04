import React, { useState } from 'react';

let state: any = {}
//create init state w/ empty string
export const TestState = React.createContext(state);
//create handler that can edit string w/ user input 

//initial state
const TestProviders = ({ children }: any) => {
    const [expectedResult , setResult] = useState('InitialString');
    const [inputType, setInputType]  = useState('');
    const [outputType, setOutputType] = useState('');
//handler that changes it
    const testHandler = (TestValue: string):void => {
        setResult(TestValue)
        console.log(TestValue)
    };
    const inputDropdownHandler = (selection: string): void => {
        setInputType(selection);
    };

    const outputDropdownHandler = (selection: string): void => {
        setOutputType(selection);
    };


return (
    <TestState.Provider
        value={{
        expectedResult,
        testHandler, 
        inputType, 
        inputDropdownHandler,
        outputType, 
        outputDropdownHandler
        }} >
    {children}
    </TestState.Provider>
)
}


export default TestProviders;