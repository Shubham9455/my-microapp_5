import Image from "next/image";
import { useEffect } from "react";
import { AuthProvider } from '@microapp-io/react';
import Home from "./home";

export default function App(props:any) {
  return (
    <AuthProvider>
      {/* Your microapp code here */}
      <Home prop={props} />
    </AuthProvider>
  );
}
