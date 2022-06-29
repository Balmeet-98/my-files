import React,{useState,useEffect} from 'react'

export const Async = () => {
  const [data, setData] = useState([]);
  const myFunc=async()=>{
      
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return <div>Async</div>;
};
