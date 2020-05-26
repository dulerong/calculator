import React from 'react';
import './App.css';
import Buttons from './components/Buttons.js'

const numRegex = /[0-9]/
const signRegex = /[*+/-]/

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: [],
      results: []
    }
    //Bind methods here
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEval  = this.handleEval.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
  }
  handleClear() {
    this.setState({
      message: [],
      results: []
    })
  }
  handleClick(event) {
    if (event.target.value === "backSpace") {
      this.setState({
          message: this.state.message.slice(0, -1)
      })
    }
    else if (this.state.message.includes(".") && event.target.value === ".") {
      //Do nothing when decimal is already present and next keyClick is decimal again
    }
    else if (!this.state.message.includes("=")){
      this.setState({
          message: this.state.message.concat(event.target.value)
        })
    }
    else if (this.state.message.includes("=") && !numRegex.test(event.target.value)){
      this.setState({
          message: this.state.results.slice(-1).concat(event.target.value),
          results: []
      })
    }
    else {
      this.setState({
          message: [].concat(event.target.value),
          results: []
      })
    }
  }
  handleNumber(event) {
    let number = Number(event.target.value)
    this.setState({
      message: this.state.message.concat(number)
    })
  }
  handleEval() {
    if(this.state.message.includes('=')){
      alert('Do not press = without entering number or +-*/')
    }
    else if(numRegex.test(this.state.message.slice(-1))){
      let sum = eval(this.state.message.join(""))
      
      this.setState({
        message: this.state.message.concat('=').concat(sum),
        results: this.state.results.concat(sum)
      })
      console.log(this.state.message)
    }
    else{
      alert('incorrect input, will not evaluate!')
    }
    
  }
  render() {
    console.log(this.state.message, this.state.results)
    return (
      <div className="calculator">
        <h1>{this.state.message}</h1>
        <h1>{this.state.results[this.state.results.length-1]}</h1>
        <Buttons 
          handleNumber={this.handleNumber}
          handleClick={this.handleClick} 
          handleClear={this.handleClear}
          handleEval ={this.handleEval}/>
        <p className='bottomCaption'>Coded by Codey Du! 2019 November 21st</p>
      </div>
    )
  }
}

export default Calculator;
