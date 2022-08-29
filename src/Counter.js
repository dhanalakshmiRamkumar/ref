import React from 'react'


export default class Counter extends React.Component {
    constructor(){
        super();
        this.state ={
            value : 5
        }
    }
        handleIncrement = () => {
        this.setState({value: ++this.state.value})
      }
        handleDecrement = () => {
        this.setState({value: --this.state.value})
      }
      
        handleReset = () => {
         this.setState({value: 5})
      }
  render() {
    return (
      
                <>
                  <h3>Counter2</h3>
                  value: {this.state.value}  <br/> <br/>
                  <button onClick={this.handleIncrement}>Increment</button> &nbsp;
                  <button onClick={this.handleDecrement}>Decrement</button> &nbsp;
                  <button onClick={this.handleReset}>Reset</button> &nbsp;
                  
                </>
            );
        
    
  }
}