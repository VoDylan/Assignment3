import React from "react";
import TextField from '@mui/material/TextField';

interface TextboxProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password"; // Define type prop to indicate input type
}
export const LeftAlignedTextbox = (props: TextboxProps) => {

  return (
    <div>
      <TextField
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        type={props.type} // Set input type
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

