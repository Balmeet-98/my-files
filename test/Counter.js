import React ,{useState} from 'react'
function Counter() {
    const[count,setCount]=useState(0);
    const myFunc=()=>{
        count<=0?setCount(count):setCount(count-1)
        console.log(count);
    }
  return (
    <div>
      <p>
      <button type="button" className='btn btn-outline lg' onClick={myFunc}>-</button>
          <h1>State:{count}</h1>
          <button type="button" className='btn btn-outline lg' onClick={()=>setCount(count+1)}>+</button>
      </p>
    </div>
  )
  }

export default Counter