// import React from 'react'


// const Kid = ({valKey,valKey2}) => {
//   return (
//     <div>
      
//     <h2>{valKey}</h2>
//     <p>{valKey2}</p>
//     </div>
//   )
// }

// export default Kid
import React from 'react'

const Kid = (props) => {
  const dataSender = props.keyReceiveData;
  dataSender('Hello summer')
  
  return (
    <div>Kid</div>
    
  )
}

export default Kid