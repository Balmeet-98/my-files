import React, { useState } from 'react'
import { Child } from './Child'
export const Parent = () => {
    const[data,setData]=useState("honey");
    const childToParent=(a)=>{
         setData(a);
    }
  return (
    <div>
        <Child name={childToParent} ki="sda"/>
        <p>{data}</p>
    </div>
  )
}
