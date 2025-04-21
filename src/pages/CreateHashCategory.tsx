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
//import styles from 'styles.module.css';
interface IHashCategoryInputFormDS {
  hashCatName : string
  description : string
  
}

//export const CreateHashCategory = () => {
export default function CreateHashCategory() {
  
  const { control, handleSubmit } = useForm({
    defaultValues: {
      hashCatName: "",
      description: ""
    }
  });

  const onSubmit: SubmitHandler<IHashCategoryInputFormDS> = (data) => {
    alert('Submit');
    console.log(data)
  }
  
  return (
  <>
    <h3>Manage HashTag Category</h3>
    <Container className="m-4">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <Row className="m-2">
        <Col lg="3">
          <label>Category Name</label>
        </Col>
        <Col lg="9">
        <div>
        <Controller
          name="hashCatName"
          control={control}
          render={({ field }) => <TextField {...field} id="outlined-basic" label="Category Name" variant="outlined" fullWidth/>}
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
    </form>
    </Container>
  </>
  );
     
}
