import { TextField } from "@mui/material";

const FormInput = (props) => {
  return (
    <TextField
      {...props.field}
      error={props.error}
      fullWidth
      helperText={props.helperText}
      type={props.type}
      label={props.label}
      variant="standard"
      margin="dense"
    />
  );
};

export default FormInput;
