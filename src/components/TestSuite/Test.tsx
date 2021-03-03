import React, {useContext} from 'react';
import { TestState } from '../../provider/TestProvider';
// import {ReactDOM, render} from 'react-dom'

const TestBuilder = () => {
  const { testHandler, expectedResult }: any = useContext(TestState);


  //takes id value of choices1 and invokes test handler, thus reassigning state expectedResult, which has string value
  const clicker = () => {
    console.log('Inner Html: ', document.getElementById('choices1').innerHTML);
    console.log('Inner Text: ', document.getElementById('choices1').innerText);
    console.log('Attribute Node: ', document.getElementById('choices1').ATTRIBUTE_NODE);
    console.log('Get attribute names: ', document.getElementById('choices1').getAttributeNames);
    const choicesDropdown = document.getElementById('choices1').nodeValue;
    testHandler(choicesDropdown);
}

  return (
    <div>
      <h1>Current Expected Result: {expectedResult}</h1>
      <h3>Please enter your expected result:</h3>
      
      {/* select value for input  */}
      <label htmlFor="input"> Please select your input:</label>
      <select id="choices1" className = "choices">
          <option value= "array"> Array</option>
          <option value ="integer">Integer</option>
          <option value= "string">String</option>
      </select>
      
      <br></br>
      <button type="button" className = "choices" onClick={()=> {clicker()}} placeholder="Enter your expected result"/>
     

      {/* select value for output  */}
      {/* <label htmlFor="input"> Please select your output:</label>
      <select className= "choices">
          <option value= "array"> Array</option>
          <option value ="integer">Integer</option>
          <option value= "string">String</option>
      </select>

      <button className= "selectButton" onClick = {this.handleClick} > Select</button> */}


      {/* delete button 
      <button className= "deleteTestButton" onClick = {this.handleClick} > Select</button> */}
    
      {/* save button  */}
      {/* <button className= "saveTestButton" onClick = {this.handleClick} > Select</button> */}
</div>

  )
}

export default TestBuilder;