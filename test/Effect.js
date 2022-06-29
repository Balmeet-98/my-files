import React,{useEffect,useState} from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Render " + count)
    // return () => {
    //   console.log("Unmount" + count)
    // }
  },[])

  return (
    <>
     <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
    </>
  );
};

export default Effect;
