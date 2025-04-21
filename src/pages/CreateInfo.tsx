import React from 'react';
import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
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
interface IFormInput {
  titleValue: string;
  detailsValue: string;
  myFile: File;
}
/*
const defaultValues = {
  titleValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};
*/

const defaultValues = {
    titleValue: "",
    detailsValue: "",
    uploadFile: undefined
  };

export const CreateInfo = () => {
  const { handleSubmit, reset, control, setValue } = useForm<IFormInput>({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  
  }
  const top100Films = [
    { title: 'Password', year: 1994 },
    { title: '', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    
  ];
  return (

    <Container>
        <Row className='mt-5'>
        <Col >
        <Typography variant="h4">Create Information</Typography>
        </Col>
        </Row>
        <Row className='mt-2'><Col><Typography variant="h6">Title</Typography></Col></Row>
        <Row className='mt-1'>
        <Col>
            <FormInputText 
                name="titleValue" 
                control={control} 
                label="Title" />
        </Col>
        </Row>
        <Row className='mt-2'><Col><Typography variant="h6">Contents</Typography></Col></Row>
        <Row className='mt-1'>
        <Col >
            <FormInputTextArea
                name="detailsValue" 
                control={control} 
                label="Details" />
        </Col>
        </Row>
        <Row className='mt-2'><Col><Typography variant="h6">Attachment</Typography></Col></Row>
        <Row className='mt-1'>
        <Col >
            <FormInputUploadFile
                name="uploadFile" 
                control={control} 
                label="File to Upload" />
        </Col>
        </Row>
        <Row className='mt-2'><Col><Typography variant="h6">Tags</Typography></Col></Row>
        <Autocomplete
        multiple
        id="tags-standard"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[13]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Tags"
            placeholder="Tags"
          />
        )}
      />
        <Row className='mt-5'>
        <Col >
        <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>   
        Reset
        </Button>
        </Col>
        <Col >
        <Button onClick={() => reset()} variant={"outlined"}>Submit </Button>
        </Col>
        
        </Row>
    </Container>
        
  );
};