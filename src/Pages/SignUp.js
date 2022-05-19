import { Divider } from "@mui/material";
import SignUpForm from "../Components/Auth/SignUpForm";

const SignIn = () => {
  return (
    <>
      <SignUpForm />
      <Divider
        variant="middle"
        sx={{ mt: 2, fontSize: "1.4rem", fontWeight: 600 }}
      >
        OR SIGN IN WITH
      </Divider>
    </>
  );
};

export default SignIn;
