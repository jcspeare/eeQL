import React, {useContext} from 'react';
import { TestState } from '../../provider/TestProvider';
// import {ReactDOM, render} from 'react-dom'

const TestBuilder = () => {
  const { testHandler, expectedResult, inputType, inputDropdownHandler, outputType, outputDropdownHandler}: any = useContext(TestState);


  //takes id value of choices1 and invokes test handler, thus reassigning state expectedResult, which has string value
  const clicker = () => {
    console.log('Get Element by Classname choices',  document.getElementsByClassName('choices') as HTMLSelectElement)
    // verify all fields are successfully updated in console
    console.log(`input field: ${expectedResult},input selection: ${inputType}, output selection: ${outputType}, `)
  }
  
  const gatherInputDropdown = () => {
    // updates state hook for inputType by querying the id for the input dropdown
    const inputDropdown = document.getElementById('choices1') as HTMLSelectElement;
    const inputSelection = inputDropdown.options[inputDropdown.selectedIndex].text;
    inputDropdownHandler(inputSelection);
  }

  const gatherOutputDropdown = () => {
    // updates state hook for outputType by querying the id for the output dropdown
    const outputDropdown = document.getElementById('choices2') as HTMLSelectElement;
    const outputSelection = outputDropdown.options[outputDropdown.selectedIndex].text;
    outputDropdownHandler(outputSelection);
  }

//created input handler that allows input tag to change as user types and registers results 
const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) : void=>{
     testHandler((e.target as HTMLInputElement).value);
}

  return (
    <div>
      <h1>Current Expected Result: {expectedResult}</h1>
      <h3>Please enter your expected result:</h3>
 
      <input type= "text" id= "expectedRes" value={`${expectedResult}`} onChange={inputHandler} ></input>
      <br></br>
      
      {/* select value for input  */}
      <label htmlFor="input"> Please select your input:</label>
      <select id="choices1" className = "choices" onInput={gatherInputDropdown}>
          <option value= "array" id= "arr"> Array</option>
          <option value ="integer" id= "int">Integer</option>
          <option value= "string" id = "str">String</option>
      </select>

      <br></br>

          {/* select value for output  */}
          <label htmlFor="input"> Please select your output:</label>
      <select id = "choices2" className= "choices" onInput={gatherOutputDropdown}> 
          <option value= "array" > Array</option>
          <option value ="integer">Integer</option>
          <option value= "string">String</option>
      </select>


      
      
      <br></br>
      <button type="button" className = "choices" onClick={clicker} placeholder="Enter your expected result"/>
     

  


      {/* delete button 
      <button className= "deleteTestButton" onClick = {this.handleClick} > Select</button> */}
    
      {/* save button  */}
      {/* <button className= "saveTestButton" onClick = {this.handleClick} > Select</button> */}
</div>

  )
}



// const arr = [];
// const str = '';
// const num = 1;


//  getElementById('str') === str) return value
// }


export default TestBuilder;