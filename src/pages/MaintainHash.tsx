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
import Modal from '@mui/material/Modal';
import CreateHashCategory from './CreateHashCategory';
import CreateHash from './CreateHash';
import InputAdornment from "@mui/material/InputAdornment";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function MaintainHash() {

 
  const [tableData, setTableData] = useState<string[][]>([]);
  const [searchStrValue, setSearchStrValue] = useState<string>("");
  // To control Model 
  const [createHTModelOpen,setCreateHTModelOpen] = useState<boolean>(false);

  const refreshHashTagTableOnResult = ( res : HashTagSearchResp) => {

    var tableDataList : string[][] = [];
          res.hashTagDetailList.map(detail =>{
            var singleRowData : string[] = [];
            singleRowData.push(detail.htId.toString());
            singleRowData.push(detail.label);
            singleRowData.push(detail.description);
            singleRowData.push(detail.status);
            singleRowData.push(detail.numInfoAttached.toString());
            singleRowData.push('');
            tableDataList.push(singleRowData);
            
          });
          setTableData(tableDataList);
  };
  

  const muiTableHeaders = [
    {
      name: "ID",
      options: {
        filter: false
      }
    },
    {
      name:"Tag Name",
      options: {
        filter: true,
      }
    },
    {
      name: "Description",
      options: {
        filter: true,
      }
    },
    {
      name: "Status",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
          { tableMeta.rowData[3] === 'A' ?  <Chip label="Active" color="primary" /> : ''}
          { tableMeta.rowData[3] === 'D' ? <Chip label="Deleted" color="success" /> : ''}
          </div>
          )
      }
    },
    {
      name: "Num. Info. Attached",
      options: {
        filter: true,
      }
    },
    {
      name: "Actions",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
          <IconButton aria-label="delete" onClick={() => 
            { 
              //console.log(JSON.stringify(tableMeta.rowData[0])); 
              DataService.deleteHashTagById(tableMeta.rowData[0]).then((res:HashTagUpdateResp)  => {
                if ( res.result==='OK'){
                  let searchReq : HashTagSearchReq = {
                    searchStr : "",
                    pageNumber : 10
                  };
                  
                  DataService.searchAllHashTag(searchReq)
                  .then((result:HashTagSearchResp)  => {
                    refreshHashTagTableOnResult(result);
                  });
              
                
                }
              });
            }} >
            <DeleteIcon />
            
          </IconButton>
          <IconButton aria-label="details" onClick={() => 
            { 
              
            }} >
            <InfoIcon />
            
          </IconButton>
          <IconButton aria-label="enable" onClick={() => 
            { 
              
            }} >
            <DoneIcon />
            
          </IconButton>
          
          </div>
          
        )
          } // options
    } // this column's data
  ];

  const data = [
  ["Joe James", "Test Corp", "Yonkers",""],
  ["John Walsh", "Test Corp", "Hartford",""],
  ["Bob Herm", "Test Corp", "Tampa",""],
  ["James Houston", "Test Corp", "Dallas",""],
];

  const muiTableOptions = {
    filterType: 'checkbox',
    responsive: 'simple'
  };

  
  function handleCreateNewHashTag(){
    //alert('Create New Hash Tag');
    setCreateHTModelOpen(true);
  }

  function handleCloseModel(){
    
  }

  
  function handleSearchTableData(){
      let searchReq : HashTagSearchReq = {
        searchStr : searchStrValue,
        pageNumber : 10
      };

      DataService.searchAllHashTag(searchReq)
        .then((result:HashTagSearchResp)  => {
          refreshHashTagTableOnResult(result);
        });
    
      

    }
    const onTextChange = (e: any) => setSearchStrValue(e.target.value);
  
  return (
    <>
    <Container>
      <Row>
      <Col >
      <Stack direction="row" m={2} spacing={2}>
      <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      {/*
      <TextField id="outlined-basic" label="Hashtag Name" variant="outlined"  value={searchStrValue} onChange={onTextChange} />
        */}
        <TextField
      label="Search"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearchTableData}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}

    />
      
     </Box>
    
    <Button variant="contained"  
     onClick={() => {
      handleCreateNewHashTag();}}   
    >
      Create</Button>
</Stack>
      </Col>
      <Col >

      </Col>
      </Row>

      <Row>
        <Col>
          <MUIDataTable
            title={"#HashTag List"}
            data={tableData}
            columns={muiTableHeaders}
            options={muiTableOptions} />
        </Col>
  
      </Row>
      
    </Container>
    <Modal
        open={createHTModelOpen}
        onClose={handleCloseModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box
        sx={{
          width: '60%', // 70% of the parent width
          height: '50%', // 50% of the parent height
          bgcolor: 'background.paper',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
       <CreateHash 
       turnOffModal = {()=>setCreateHTModelOpen(false)} /> 
      </Box>
       
      </Modal>
    {/*}
     
  {*/}
    
  
  
    
  
    </>
  )
}


