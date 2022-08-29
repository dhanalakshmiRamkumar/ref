import React, {createRef} from 'react'
function Appapp(){
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
          <h3>App App</h3>
          <button onClick={handleIncrementFromApp}>Increment</button> &nbsp;
          <button onClick={handleDecrementFromApp}>Decrement</button> &nbsp;
          <Counter ref={refernce}/>
        </>
    )
}