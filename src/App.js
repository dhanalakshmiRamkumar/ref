import React, {createRef} from 'react'
import Counter from './Counter'

export default class App extends React.Component {
  
    constructor(){
        super();
        this.state ={
            
        }
    }
    render() {
      const refernce = createRef()
      const handleIncrementFromApp =() => {
        refernce.current.handleIncrement();
        console.log(refernce)
      }
      const handleDecrementFromApp =() => {
        refernce.current.handleDecrement();
        console.log(refernce)
      }
      return(
        <>
          <h3>App component</h3>
          <button onClick={handleIncrementFromApp}>Increment</button> &nbsp;
          <button onClick={handleDecrementFromApp}>Decrement</button> &nbsp;
          <Counter ref={refernce}/>
        </>
      )
    }
  }