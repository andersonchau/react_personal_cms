import { useLocation } from "react-router-dom";
import React from 'react'

export default function Home() {
  let location = useLocation();
  console.log(location);
  
  return <h2>Dashboard</h2>;
     
}
