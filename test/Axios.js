import React, { useEffect, useState } from 'react'
import axios from 'axios';  

export const Axios = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(result=>{setData(result.data)})
    },[])
  return (
    <div>
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
    </div>
  )
}
