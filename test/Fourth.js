// import React from 'react'

// export const Fourth = ({pen}) => {
//   return (<>
//     <div>I am Fourth.i receive the {pen}</div>
//   </>
//   )
// }

import React, { useContext } from 'react'
import { myContext } from '../App';
export const Fourth = () => {
    const pen=useContext(myContext);
  return (
    <div>Fourth.i get {pen}</div>
  )
}
