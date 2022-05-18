import { Box, Button, TextField } from "@mui/material";

const SignUpForm = () => {
  return (
    <Box component="form" sx={{ width: "70vw", margin: "0 auto" }}>
      <TextField
        fullWidth
        size="small"
        type="text"
        label="full name"
        variant="standard"
        margin="dense"
      />
      <TextField
        margin="dense"
        fullWidth
        size="small"
        type="email"
        label="email"
        variant="standard"
      />
      <TextField
        margin="dense"
        fullWidth
        size="small"
        type="password"
        label="password"
        variant="standard"
      />
      <TextField
        margin="dense"
        fullWidth
        size="small"
        type="password"
        label="Confirm password"
        variant="standard"
      />
      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
        sign up
      </Button>
    </Box>
  );
};

export default SignUpForm;
