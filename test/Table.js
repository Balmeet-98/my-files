import React, { useState,useEffect } from 'react'

export const Table = () => {
const[data,setData]=useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json =>{
  setData(json)
})
},[])

  return (<>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    {data.map((a)=>{
          return  <tr key={a.id}>
         <th scope="row">{a.id}</th>
         <td>{a.name}</td>
         <td>{a.username}</td>
         <td>{a.email}</td>
         <td>{a.address.city}</td>
       </tr>
    })}
  </tbody>
</table>
    </>
  )
}
