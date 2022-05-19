import { Box, Divider } from "@mui/material";
import AuthHeader from "../Components/Auth/AuthHeader";
import AuthServices from "../Components/Auth/AuthServices";
import SignUpForm from "../Components/Auth/SignUpForm";

const SignIn = () => {
  return (
    <Box component={"main"} p={2} textAlign="center">
      <AuthHeader main="Get started" sub="Create an Account" />
      <SignUpForm />
      <Divider
        variant="middle"
        sx={{ mt: 4, fontSize: "1.4rem", fontWeight: 600 }}
      >
        OR SIGN IN WITH
      </Divider>
      <AuthServices />
    </Box>
  );
};

export default SignIn;
