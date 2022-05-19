import { Box, Divider } from "@mui/material";
import AuthHeader from "../Components/Auth/AuthHeader";
import AuthServices from "../Components/Auth/AuthServices";
import LoginForm from "../Components/Auth/LoginForm";

const Login = () => {
  return (
    <Box
      component={"main"}
      p={2}
      sx={{ height: "100vh" }}
      textAlign="center"
      display="flex"
      flexDirection="column"
    >
      <Box sx={{ mt: 2 }}>
        <AuthHeader main="Welcome" sub="sign in to continue" />
      </Box>
      <Box sx={{ margin: "auto" }}>
        <LoginForm />
        <Divider
          variant="middle"
          sx={{ mt: 4, fontSize: "1.4rem", fontWeight: 600 }}
        >
          OR SIGN IN WITH
        </Divider>
        <AuthServices />
      </Box>
    </Box>
  );
};

export default Login;
