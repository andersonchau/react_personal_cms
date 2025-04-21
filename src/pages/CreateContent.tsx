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

interface ICreateContentInputFormDS {
  myText : string;
  myHashTagList : string[];
}


export default function CreateContent({turnOffModal}) {
  
  const { control, handleSubmit,  formState: { errors } } = useForm({
    defaultValues: {
      myText: "",
      myHashTagList: []
    }
  });

  function submitNewHashTag(){}
  function onPressCacnel(){
    turnOffModal();
  }
  
  const onFormSubmit: SubmitHandler<ICreateContentInputFormDS> = (data) => {
    alert('Submit data here ' + JSON.stringify
      (data));
    
    console.log(data);
    
  }

  const onError = (errors) =>  { 
    //alert('error occurrs');
    console.log(errors);
  }
  
  function hasNoSpecialCharacters(input: string): boolean {
    const regex = /^[a-zA-Z0-9\s]*$/;
    return regex.test(input);
  }

    
  

  return (
  <>
    <Container className="m-4">
    <form onSubmit={handleSubmit(onFormSubmit,onError)}>
      {/* register your input into the hook by invoking the "register" function */}
      <Row className="m-2">
      <h4>Create Content </h4>
      </Row>
      <Row className="m-2">
        <Col lg="3">
          <label>Text Content</label>
        </Col>
        <Col lg="9">
        <div>
        <Controller
          name="myText"
          control={control}
          rules={{
            validate: {
              required: (value) => {
                if (!value) return 'Must not be Empty';
                if (!hasNoSpecialCharacters(value)) return 'Must not contain special character'; 
              }
            },
          }}
          render={({ field, fieldState: { error } }) => 
            <>
          <TextField {...field} id="outlined-basic" label="Category Name" variant="outlined" fullWidth/>
          {error && <p style={{color:"red"}}>{error.message}</p>}
          </>
        }
        />
        </div>
        </Col>
      </Row>
         

      <Row className="m-2">
      <Col lg="3">
      <label>Description</label>
      </Col>
        <Col lg="9">
       <Controller
        name="description"
        control={control}
        render={({ field }) => <TextField {...field} id="outlined-basic" label="Description" variant="outlined" fullWidth/>}
      />
      </Col>
      </Row>
      <Row className="m-4">
      <div className="d-flex flex-row bd-highlight mb-3 gap-3 flex-row-reverse">
      <Button variant="contained"  
        onClick={() => {
        onPressCacnel();}}   
        >Cancel</Button>
      
      <Button 
        type="submit"
        variant="contained"  
        onClick={() => {
        //alert('aaa');
        //handleSubmit(onFormSubmit, onError);
      }}   
      >Create</Button>
    </div>
    
    </Row>
    </form>
    </Container>
  </>
  );
     
}

