import React, { useEffect } from 'react';

type HomeProps = {
  lang?: 'es' | 'en' | 'pt';
  theme?: 'light' | 'dark';
}

export default function Home(props: HomeProps) {

  const callAPI = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    console.log(data);
  }
  useEffect(() => {
    console.log("Home props", props);
    callAPI();
  }, [props]);

  return (
    <>
      <div className="font-extrabold text-lg">Test Home</div>
      <button onClick={callAPI}>Call API</button>
    </>
  );
}