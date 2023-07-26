// import Kid from "./Kid";

// const App = () => {
//   const val = "hi";
//   const val2 = "hello"
//   return(
// <>
// <Kid valKey={val}  valKey2={val2}  />

// </>
//   )
// }

// export default App

//parent 
import React from 'react'
import Kid from './Kid'


const App = () => {
  const receiveData = (data)=>{
    console.log(data)
  }
  return (
    <>
    <div>App</div>
    <Kid keyReceiveData = {receiveData}/>
    </>
  )
}

export default App