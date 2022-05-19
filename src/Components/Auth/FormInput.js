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
      sx={{
        "& input": {
          fontSize: "1.8rem",
          paddingLeft: ".8rem",
        },
        "& label": {
          fontSize: "1.4rem",
        },
      }}
      margin="dense"
    />
  );
};

export default FormInput;
