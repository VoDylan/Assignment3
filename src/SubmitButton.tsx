import {Button} from "@mui/material";
import {SecurityRequest} from "./SecurityRequestFormSubmission.ts";

interface ButtonProps{
  text: string
  input: SecurityRequest
  clear: () => void
}
export function SubmitButton(props: ButtonProps) {
  function handleSubmit(){
    console.log(props.input);
    props.clear();
  }

  return (
      <Button variant="contained" id={"submitButton"} onClick={() => handleSubmit()}>{props.text}</Button>
  );
}