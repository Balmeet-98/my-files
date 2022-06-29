import React from 'react'

export const Child = (name) => {
  return (
    <div>
        <button onClick={()=>name("childTOparent called")}>click child</button>
    </div>
  )
}
