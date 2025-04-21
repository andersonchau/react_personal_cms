import React from 'react'
import { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MUIDataTable from "mui-datatables";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createStyles, makeStyles, Theme  } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {DataService} from '../service/DataService';
import { HashTagSearchReq,HashTagSearchResp,HashTagDetails,HashTagUpdateResp } from '../interfaces/AppInterface';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import { globalStore , RootState } from '../store/store';
import { onDecrement,onIncrement } from '../features/UserSettingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { UserSettingsState } from "../interfaces/AppInterface";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
// Ref : https://www.freecodecamp.org/news/use-redux-toolkit-to-manage-state-in-react-apps/

export default function TestingPage() {
   
  // This page is for testing of effect of commonly used 

  // useSelector reads a value from the store state and subscribes to updates,
  const myCounter = useSelector((state: RootState) => state.userSettings.myCounter ); 
  // useDispatch returns the store's dispatch method to let you dispatch actions
  const reduxDispatch = useDispatch();
  console.log('myCounter is ' + JSON.stringify({myCounter}) );
  return (
    <>
    <div className="d-flex p-2 gap-3">
      <div><TextField id="outlined-basic" label="Result" variant="outlined" inputProps={
					{ readOnly: true, }
				} /></div>
      <Button variant="contained"  onClick={() => reduxDispatch(onIncrement(1))} >Increment</Button>
      <Button variant="contained"  onClick={() => reduxDispatch(onDecrement(1))} >Decrement</Button>
      <Box component="div" sx={{ display: 'inline' }}>{myCounter}</Box>
    </div>
    
   
    </>
);
 
}


