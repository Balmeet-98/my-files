import React,{useState,useEffect} from 'react'
import axios from 'axios'; 
export const Handling = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        try{
            axios.get('https://jsonplaceholder.typicode.com/use').then(result=>{setData(result.data)})
        }catch(e){
            console.log("error hai");
        }
    },[])

  return (
    <div>
{console.log(data)}
    </div>
  )
}
