import React from 'react'
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./FormInputProps";
import { MuiFileInput } from "mui-file-input";

export const FormInputUploadFile = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
    control={control}
    rules={{
      validate: (value) => value instanceof File,
    }}
    render={({ field, fieldState }) => {
      return (
        <MuiFileInput
          {...field}
          placeholder="To Upload a File"
          helperText={fieldState.invalid ? "File is invalid" : ""}
          error={fieldState.invalid}
        />
      );
    }}
    name="file"
  />
  );


};
