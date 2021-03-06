import React, { useState } from 'react';

let state: any = {}
//create init state w/ empty string
export const TestState = React.createContext(state);
//create handler that can edit string w/ user input 

//initial state
const TestProviders = ({ children }: any) => {

    // const [expectedResult , setResult] = useState('InitialString');
    // const [inputType, setInputType]  = useState('');
    // const [outputType, setOutputType] = useState('');
    // const [headertype, setHeader] = useState('');
    const [state, setState] = useState({});
    // const [endpoint, setEndpoint] = useState('');

    
//     const [expectedResult , setResult] = useState('InitialString');
//     const [inputType, setInputType]  = useState('');
//     const [outputType, setOutputType] = useState('');
// //handler that changes it
//     const testHandler = (TestValue: string):void => {
//         setResult(TestValue)
//         console.log(TestValue)
//     };
//     const inputDropdownHandler = (selection: string): void => {
//         setInputType(selection);
//     };

//     const outputDropdownHandler = (selection: string): void => {
//         setOutputType(selection);
//     };

//handler for all states with  k-v's that are added/updated 
const overallHandler = (altKey : string, altValue: any) =>{
    setState({...state, 
      [altKey]: altValue}) 
  }



return (
    <TestState.Provider
        value={{
            state,
            overallHandler,
            // inputType, 
            // outputType,
            // expectedResult
        }} >
    {children}
    </TestState.Provider>
)
}


export default TestProviders;