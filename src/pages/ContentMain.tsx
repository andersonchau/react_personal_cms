import { useLocation } from "react-router-dom";
import React from 'react'
import ReactDOM from "react-dom";
//import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import  TextField  from '@mui/material/TextField';
// import { Input as AntdInput } from "antd";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { ContentSearchReq,ContentSearchResp,ContentResultDisplayItem } from '../interfaces/AppInterface';
import SearchResListItemComp from './components/SearchResListItemComp';
import {DataService} from '../service/DataService';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const allHashTags = [
  'Passwords',
  'Videos',
  'Bookmarks',
  'Images',
  'TODOs',
];

const items = [
  {
    id: "1",
    image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    title: "Item 1",
    description: "This is the description for item 1.",
  },
  {
    id: "2",
    image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    title: "Item 2",
    description: "This is the description for item 2.",
  },
  {
    id: "3",
    image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    title: "Item 3",
    description: "This is the description for item 3.",
  },
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}
/*
interface ContentResultDisplayItem {
  id: string,
  title: string,
  image: string,
  description: string,
}*/

export default function ContentMain() {

  const theme = useTheme();
  const [selectedHashTagList, setSelectedHashTagList] = React.useState<string[]>([]);
  const [searchStr, setSearchStr] = React.useState<string>("");
  const [searchResultItems,setSearchResultItems] = React.useState<ContentResultDisplayItem[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof selectedHashTagList>) => {
    const {
      target: { value },
    } = event;
    setSelectedHashTagList(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const onDetailsClicked = (id: string) => {
    //alert('xxxxx ' + id);
    //console.log(`Button clicked with ID: ${id}`);
    
};
  

  const handleDelete = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    console.log("clicked delete");
    //setPersonName((current) => _without(current, value));
    setSelectedHashTagList((l =>l.filter(item => item !== value)));
  };  

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const value = event.target.value;
    setSearchStr(event.target.value);
    console.log("handleSearchChange " + searchStr.length);
    if ( searchStr.length >= 3) {
      const searchReq: ContentSearchReq = {
        dataType: "text", // now only support Text search
        searchText: searchStr 
      };
      DataService.seachContent(searchReq)
            .then((res:ContentSearchResp[])  => {
              // Update Result list here
              console.log("BBB " + JSON.stringify(res));
              updateUIBySearchResult(res);
            }).catch((error :Error) => {
              // 
              updateUIBySearchResult([]);
              console.log("Error !");
            });
    }
  
  };

  const updateUIBySearchResult = (apiResList:ContentSearchResp[]) =>{
    // to convert API result apiResList - ContentSearchResp[]  -> searchResultItems - ContentResultDisplayItem[]
    console.log("CCC " + JSON.stringify(apiResList));
    const newTargetList: ContentResultDisplayItem[] = apiResList.map((item : ContentSearchResp) => ({
      id: item._id,
      image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      description: item.textContent,
      title: item.title
    }));
    setSearchResultItems(newTargetList);
  }

  return (
  <>
    <Container className="m-4">
      <Row className="m-2">
        <Col lg="1">
            <label>Search</label>
        </Col> 
        <Col lg="5">
            <TextField 
            id="outlined-basic" 
            label="Search Your Database" 
            variant="outlined" 
            onChange={handleSearchChange} 
            value={searchStr}
            fullWidth
            />
        </Col> 
        <Col lg="1">
            <label>HashTag</label>
        </Col> 
        <Col lg="5">
        <FormControl fullWidth>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedHashTagList}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} 
                onDelete={(e) => handleDelete(e, value)}
                deleteIcon={
                  <CancelIcon
                    onMouseDown={(event) => event.stopPropagation()}
                  />
                }/>
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {allHashTags.map((hashTag) => (
            <MenuItem
              key={hashTag}
              value={hashTag}
              style={getStyles(hashTag, selectedHashTagList, theme)}
            >
              {hashTag}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        </Col>
      </Row>
      <Row>
  
      {searchResultItems.map((item) => (
        
        <SearchResListItemComp data={item} onDetailsClick={onDetailsClicked}/>
      ))}
    
      </Row>
     </Container>
  </>
  );
     
}

