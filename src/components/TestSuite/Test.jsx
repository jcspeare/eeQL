import React, { useContext} from 'react';


class TestBuilder extends Component {
    constructor (props){
        super(props)
        this.state = {
         expectedResult : ''
        }
        this.handleClick = this.bind(this.handleClick);
    }

 
 //const TestBuilder = () => {
   // const {expectedResult} : any = useContext(InputState)
 //}   


//button functionality for submitting test
handleClick(e) { this.setState({ expectedResult: e.target.value }); }

// handleDelete = e => this.setState({})

// handleSave = e => this.setState({})

// handleTest =e => this.setState({})

    render(){

     return (
<div>


<h3>Please enter your expected result:</h3>

<button type="text" className = "choices" onChange={this.handleClick} placeholder="Enter your expected result"/>

 {/* select value for input  */}
    <label for="input"> Please select your input:</label>
    <select className = "choices">
        <option value= "array"> Array</option>
        <option value ="integer">Integer</option>
        <option value= "string">String</option>
    </select>

    {/* select value for output  */}
    <label for="input"> Please select your output:</label>
    <select className= "choices">
        <option value= "array"> Array</option>
        <option value ="integer">Integer</option>
        <option value= "string">String</option>
    </select>

    <button className= "selectButton" onClick = {this.handleClick} > Select</button>


    {/* delete button 
    <button className= "deleteTestButton" onClick = {this.handleClick} > Select</button> */}
    {/* test button  */}
    {/* <button className= "testButton" onClick = {this.handleClick} > Select</button> */}
    {/* save button  */}
    {/* <button className= "saveTestButton" onClick = {this.handleClick} > Select</button> */}
</div>

     )   
    }

}

export default TestBuilder;