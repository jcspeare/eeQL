import React, { useContext, useEffect, useState } from "react";
import { TestState } from "../../provider/TestProvider";
// import {ReactDOM, render} from 'react-dom'

const TestBuilder = () => {
  const {
    state,
    overallHandler,
    expectedResult,
    inputType,
    outputType,
  }: any = useContext(TestState);

  
  const [local, localhandler] = useState(0);


  //takes id value of choices1 and invokes test handler, thus reassigning state expectedResult, which has string value
  const clicker = () => {
    // console.log('Get Element by Classname choices',  document.getElementsByClassName('choices') as HTMLSelectElement)
    // verify all fields are successfully updated in console
    // gather current value from all fields.
    // serverApp input
    // "it"/ test description
    // method dropdown
    // input type
    // input value
    // output type
    // output value
    // headers dropdown


    localhandler(state);
    console.log('local localHandler', localhandler(+1))
    console.log('gloabl state', state )
    console.log('gloabl overallHandler', overallHandler )

  };

  const gatherInputDropdown = () => {
    // updates state hook for inputType by querying the id for the input dropdown
    const inputDropdown = document.getElementById(
      "choices1"
    ) as HTMLSelectElement;
    console.log("changedInputType", inputDropdown);
    const inputSelection =
      inputDropdown.options[inputDropdown.selectedIndex].text;
    overallHandler("inputType", inputSelection);
  };

  const gatherOutputDropdown = () => {
    // updates state hook for outputType by querying the id for the output dropdown
    const outputDropdown = document.getElementById(
      "choices2"
    ) as HTMLSelectElement;
    const outputSelection =
      outputDropdown.options[outputDropdown.selectedIndex].text;
    overallHandler("outputType", outputSelection);
  };

  //created input handler that allows input tag to change as user types and registers results
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    overallHandler(e.target.id, (e.target as HTMLInputElement).value);
  };

  return (
    <div>
      <h3>Please enter your server/application</h3>
      <input></input>
      <h3>Please enter your expected result:</h3>
      <input
        type="text"
        id="expectedRes"
        value={state.expectedRes}
        onChange={inputHandler}
      ></input>
      <br></br>

      {/* method dropdown */}
      <h3>Please enter the desired HTTP method</h3>
      <select>
      <option value="get" id="post">
          {" "}
          get
        </option>
        <option value="post" id="post">
          post
        </option>
        <option value="put" id="put">
          put
        </option>
        <option value="delete" id="delete">
          delete
        </option>
      </select>

      <br></br>

      {/* Endpoint input */}
      <h3>Pleas enter your desired endpoint</h3>
      <input></input>


      <br></br>

      {/* select value for input  */}
      <label htmlFor="input"> Please select your input:</label>
      <select id="choices1" className="choices" onInput={gatherInputDropdown}>
        <option value="array" id="arr">
          {" "}
          Array
        </option>
        <option value="integer" id="int">
          Integer
        </option>
        <option value="string" id="str">
          String
        </option>
      </select>

      {/* input field for input data */}
      <label> Please enter your input data:</label>
      <input/>

      <br></br>

      {/* select value for output  */}
      <label htmlFor="input"> Please select your output:</label>
      <select id="choices2" className="choices" onInput={gatherOutputDropdown}>
        <option value="array"> Array</option>
        <option value="integer">Integer</option>
        <option value="string">String</option>
      </select>

      {/* input field for output data */}
      <label> Please enter your expected output data:</label>
      <input/>

      <br></br>
      <button
        type="button"
        className="choices"
        onClick={clicker}
        placeholder="Enter your expected result"
      >
        Wooosh
      </button>

      {/* delete button 
      <button className= "deleteTestButton" onClick = {this.handleClick} > Select</button> */}

      {/* save button  */}
      {/* <button className= "saveTestButton" onClick = {this.handleClick} > Select</button> */}
    </div>
  );
};

// const arr = [];
// const str = '';
// const num = 1;

//  getElementById('str') === str) return value
// }

export default TestBuilder;
