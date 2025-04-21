import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import MaintainHash from './pages/MaintainHash.tsx';
import HashMain from './pages/HashMain.tsx';
import Home from './pages/Home.tsx';
import NavBar from './pages/NavBar.tsx';
import Grid from '@mui/material/Grid';
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import { ReactComponent as MyIcon } from './assets/text.svg';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}><NavBar /></Grid>
      <Grid item xs={9}><Outlet/></Grid>
    </Grid>  
  );
}

export default App
