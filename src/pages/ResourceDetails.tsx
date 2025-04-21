  import React from 'react';
  import { Button, Paper, Typography } from "@mui/material";
  import { FormInputText } from "./form-components/FormInputText";
  import { FormInputTextArea } from "./form-components/FormInputTextArea";
  import { FormInputMultiCheckbox } from "./form-components/FormInputMultiCheckbox";
  import { FormInputDropdown } from "./form-components/FormInputDropdown";
  import { FormInputSlider } from "./form-components/FormInputSlider";
  import { FormInputRadio } from "./form-components/FormInputRadio";
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import { FormInputUploadFile } from './form-components/FormInputUploadFile';
  import Autocomplete from '@mui/material/Autocomplete';
  import TextField from '@mui/material/TextField';
  import { useForm, Controller, SubmitHandler } from "react-hook-form";
  import MenuItem from '@mui/material/MenuItem';
  import FormControl from '@mui/material/FormControl';
  import Select, { SelectChangeEvent } from '@mui/material/Select';
  import Box from '@mui/material/Box';
  import InputLabel from '@mui/material/InputLabel';
  import TextareaAutosize from '@mui/material/TextareaAutosize';
  import { IFormInputResource , ContentCreateResponse } from '../interfaces/AppInterface';
import {DataService} from '../service/DataService';
  type ResourceDetailsProps = {
      mode: string;
      detailsId: number;
  };


  const defaultValues : IFormInputResource = {
      title : "",  
      description : "",
      resourceType : "text",
      resourceId : -1,
      detailsText : "",
      hashTagList : [],
      resourceFolders : [],
      key : 999,
    };

function isEmpty(val){
      return (val === undefined || val == null || val.length <= 0) ? true : false;
  }
  // TODO : 
function validateInput (myReq : IFormInputResource ) {
  if ( isEmpty(myReq.title)  ){
    return "Title is Empty!";
  } else if  ( isEmpty(myReq.resourceType) || !(myReq.resourceType === "text")  ){
    return "Resource Type is not Text!"; 
  } else if (isEmpty(myReq.detailsText) || myReq.detailsText.length < 4 ){
    return "Details Text is too short";
  } 
  return null;
}
  
  const ResourceDetails: React.FC<ResourceDetailsProps> = ({ mode, detailsId }) => {
    
    

    const { handleSubmit, reset, control,  getValues  } = useForm<IFormInputResource>({
      defaultValues: defaultValues,
    });
    
    const [myResourceType, setMyResourceType] = React.useState('');

    function submitNewHashTag(){}
    function onPressCacnel(){
      
    }
    

    const onFormSubmit: SubmitHandler<IFormInputResource> = (data) => {
      //alert('Submit data here ' + JSON.stringify (data));
      let validateRes = validateInput(data);
      if ( validateRes ) {
        alert(validateRes);
      } else {
         DataService.createContent(data)
                    .then((res:ContentCreateResponse)  => {
                      // Update Result list here
                      console.log("BBB " + JSON.stringify(res));
                      alert("Content Created!"); 
                    }).catch((error :Error) => {
                      // 
                      alert("Server Error!"); 
                      console.log("Error !");
                    });
            }
    }
    
    const onError = (errors) =>  { 
      //alert('error occurrs');
      console.log(errors);
    }
    
    function hasNoSpecialCharacters(input: string): boolean {
      const regex = /^[a-zA-Z0-9\s]*$/;
      return regex.test(input);
    }

    const handleResourceTypeChange = (event: SelectChangeEvent) => {
      //setAge(event.target.value as string);
      console.log("handleResourceTypeChange " + event.target.value);
     //alert("handleResourceTypeChange " + event.target.value);
      //setMyResourceType(event.target.value);
    };
  
    return (
      <>
        <Container className="m-4">
        <form onSubmit={handleSubmit(onFormSubmit,onError)}>
          {/* register your input into the hook by invoking the "register" function */}
          <Row className="m-2">
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Create Resources
          </Typography>
          </Row>
          <Row className="m-2" >
            <Col lg="2">
              <label>Resource Type</label>
            </Col>
            <Col lg="4">
            <div>
            <Controller
              name="resourceType"
              control={control}
              render={({ field, fieldState: { error } }) => 
                <>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">ResourceType</InputLabel>
                <Select
                  {...field}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
            <MenuItem value="text">Text</MenuItem>
            <MenuItem value="file">File Attachment</MenuItem>
            <MenuItem value="image">Image</MenuItem>
            <MenuItem value="images">Images</MenuItem>
            <MenuItem value="video">Video</MenuItem>
          </Select>
        </FormControl>
              </>
            }
            />
            </div>
            </Col>
          </Row>
          <Row className="m-2">
            <Col lg="2">
              <label>Title</label>
            </Col>
            <Col lg="4">
            <div>
            <Controller
              name="title"
              control={control}
              render={({ field, fieldState: { error } }) => 
                <>
              <TextField {...field} id="outlined-basic" label="Describe your reource" variant="outlined" fullWidth/>
              {error && <p style={{color:"red"}}>{error.message}</p>}
              </>
            }
            />
            </div>
            </Col>
            <Col lg="2">
          <label>Description</label>
          </Col>
            <Col lg="4">
          
          <Controller
            name="description"
            control={control}
            render={({ field }) => <TextField {...field} id="outlined-basic" label="Description" variant="outlined" fullWidth/>}
          />

          </Col>
          </Row> 

          <Row className="m-2" >
          <Col lg="2">
          <label>Text Data</label>
          </Col>
          <Col lg="10">

          <Controller
            name="detailsText"
            control={control}
            render={({ field }) => 
              <TextareaAutosize
            {...field}
            maxRows={10}
            minRows={100}
            aria-label="maximum height"
            placeholder="Maximum 100 rows"
            defaultValue=""
            style={{width:"100%"}}
          />}
          />

          </Col>
          </Row>
          <Row >
            <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
              <Button variant="contained" type="submit" 
               >
                Submit</Button>
              <Button variant="contained">Cancel</Button>
            </div>
          </Row>
        <Row>
             <Col lg="12">
            <p>Create Debug values resourceType (1) : {getValues("resourceType")}</p>
            <p>Create Debug values title (2) : {getValues("title")}</p>
            <p>Create Debug values detailsText (3) : {getValues("detailsText")}</p>
            </Col>
          </Row>
        </form>
        {/*ANSON*/}
       
        </Container>
      </>
      );
        
  };

  export {
      ResourceDetails, 
      ResourceDetailsProps
  }