// import React from 'react'
// import { Second } from './Second'

// export const First = ({pen}) => {
//   return (<>
//     <div>I am first.i will pass {pen} to second.</div>
//     <Second pen={pen}/>
//   </>
//   )
// }
import React from 'react'
import { Second } from './Second'

export const First = () => {
  return (<>
    <div>First</div>
    <Second/>
  </>
  )
}
