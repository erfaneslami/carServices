import { IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const AuthServices = () => {
  const googleSignupHandler = () => {
    console.log("google ");
  };

  return (
    <IconButton sx={{ mt: 3 }} color="primary" onClick={googleSignupHandler}>
      <GoogleIcon fontSize="large" />
    </IconButton>
  );
};

export default AuthServices;
