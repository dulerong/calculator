import React from 'react'

class Buttons extends React.Component {
    render() {
        return(
        <div className='buttonSection'>
            <button className="wideButton" onClick={this.props.handleClear}>AC</button>
            <button value="/" onClick={this.props.handleClick}>/</button>
            <button value="*" onClick={this.props.handleClick}>x</button>
            <button value="7" onClick={this.props.handleNumber}>7</button>
            <button value="8" onClick={this.props.handleNumber}>8</button>
            <button value="9" onClick={this.props.handleNumber}>9</button>
            <button value="-" onClick={this.props.handleClick}>-</button>
            <button value="4" onClick={this.props.handleNumber}>4</button>
            <button value="5" onClick={this.props.handleNumber}>5</button>
            <button value="6" onClick={this.props.handleNumber}>6</button>
            <button value="+" onClick={this.props.handleClick}>+</button>
            <button value="1" onClick={this.props.handleNumber}>1</button>
            <button value="2" onClick={this.props.handleNumber}>2</button>
            <button value="3" onClick={this.props.handleNumber}>3</button>
            <button value="backSpace" onClick={this.props.handleBackSpace}>←</button>
            <button className="wideButton" value="0" onClick={this.props.handleZero}>0</button>
            <button value="." onClick={this.props.handleDot}>.</button>
            <button value="=" onClick={this.props.handleEval}>=</button>
        </div>
        )
    }
}

export default Buttons