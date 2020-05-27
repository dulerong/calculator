import React from 'react';
import './App.css';
import Buttons from './components/Buttons.js'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      result: '0',
      init: true,
      eval: false
    }
    //Bind methods here
    this.handleClick =     this.handleClick.bind(this);
    this.handleClear =     this.handleClear.bind(this);
    this.handleEval  =     this.handleEval.bind(this);
    this.handleNumber =    this.handleNumber.bind(this);
    this.handleDot =       this.handleDot.bind(this);
    this.handleBackSpace = this.handleBackSpace.bind(this);
    this.handleZero =      this.handleZero.bind(this);
  }
  handleZero(){
    if(this.state.result !== '0' && this.state.eval === false){
      this.setState({
        result: this.state.result+'0'
      })
    }
    else{
      this.setState({
        result: '0',
        eval: false
      })
    }
  }
  handleBackSpace(){
    if(this.state.result.length === 1){
      this.setState({result: '0'})
    }
    else if(this.state.result.length > 1){
      this.setState({result: this.state.result.slice(0, -1)})
    }
  }
  handleClear() {
    this.setState({
      message: '',
      result: '0',
      init: true
    })
  }
  handleDot() {
    if(!this.state.result.includes('.') && this.state.eval === false){
      this.setState({result: this.state.result+'.'})
    }
  }
  handleClick(event) {
    if(!this.state.init && this.state.message){
      this.setState({
        message: this.state.message + this.state.result + event.target.value,
        result: '0',
        init: true
      })
    }
    else if(!this.state.init && !this.state.message){
      this.setState({
        message: this.state.result + event.target.value,
        result: '0',
        init: true
      })
    }
    else if(this.state.init){
      this.setState({
        message: this.state.message.slice(0, -1) + event.target.value
      })
    }
  }
  handleNumber(event) {
    if(this.state.eval === true){
      this.setState({
        result: event.target.value,
        init: false,
        eval: false
      })
    }
    else{
      if(this.state.result === '0'){
        this.setState({
          result: event.target.value,
          init: false
        })
      }
      else{
        this.setState({
          result: this.state.result+event.target.value,
          init: false
        })
      }
    }
  }
  handleEval() {
    if(this.state.message){
      this.setState({
        result: eval(this.state.message+this.state.result).toString(),
        message: '',
        eval: true
      })
    }
  }
  render() {
    
    return (
      <div className="calculator">
        <h1>{this.state.message}</h1>
        <h1>{this.state.result}</h1>
        <Buttons
          handleZero={this.handleZero}
          handleNumber={this.handleNumber}
          handleClick={this.handleClick} 
          handleClear={this.handleClear}
          handleEval={this.handleEval}
          handleDot={this.handleDot}
          handleBackSpace={this.handleBackSpace}/>
        <p className='bottomCaption'>Coded by Codey Du! 2019 November 21st</p>
      </div>
    )
  }
}

export default Calculator;
