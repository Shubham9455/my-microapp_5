import React, { useEffect } from 'react';



export default function Home(props:any) {

  const callAPI = async () => {
    const res = await fetch("http://localhost:3001/api/hello");
    const data = await res.json();
    console.log(data);
  }
  useEffect(() => {
    console.log("Home props", props);
    callAPI();
  }, []);

  return (
    <>
        <div className="font-extrabold text-lg">Test Home</div>
        <button onClick={callAPI}>Call API</button>
    </>
  );
}