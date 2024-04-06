import {Button} from "@mui/material";
import {SecurityRequest} from "./SecurityRequestFormSubmission.ts";

interface ButtonProps {
  text: string;
  input: SecurityRequest;
  clear: () => void;
  handleSubmit: () => void; // Add handleSubmit prop
}

export function SubmitButton(props: ButtonProps) {
  function handleSubmit() {
    console.log(props.input);
    props.handleSubmit(); // Invoke handleSubmit prop
    props.clear();
  }

  return (
      <Button variant="contained" id={"submitButton"} onClick={() => handleSubmit()}>{props.text}</Button>
  );
}