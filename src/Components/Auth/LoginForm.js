import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Store/Auth-context";
import LoadingSpinner from "../../UI/LoadingSpinner";
import FormInput from "./FormInput";

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm = () => {
  const { control, handleSubmit, formState } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPass: "",
    },
  });
  const { errors } = formState;
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBCrkX0aUvOpsnp-QAW1mds8-r9HDqrWfc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            returnSecureToken: true,
          }),
        }
      );

      const data = response.json();

      if (data.error) throw data;

      authCtx.login(data.idToken);
      // redirect
      navigate("/welcome", { replace: true });
      setLoading(false);
    } catch (error) {
      setError(error.error.message);
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "70vw", margin: "0 auto" }}
    >
      {error && <Typography>{error}</Typography>}
      {loading && <LoadingSpinner />}
      <Controller
        name="email"
        control={control}
        rules={{
          required: "please Enter your email",
          pattern: {
            value: emailPattern,
            message: "please enter Valid email",
          },
        }}
        render={({ field }) => {
          return (
            <FormInput
              field={field}
              type="email"
              label="email"
              helperText={errors.email?.message}
              error={errors.email && true}
            />
          );
        }}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: "please enter your password",
          minLength: { value: 6, message: "must be grater than 6" },
        }}
        render={({ field }) => {
          return (
            <FormInput
              field={field}
              type="password"
              label="password"
              helperText={errors.password?.message}
              error={errors.password && true}
            />
          );
        }}
      />

      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
      <Typography mt={1.5}>
        Don't have an account ?{" "}
        <Typography component={Link} to="/signup">
          sign up{" "}
        </Typography>
        now
      </Typography>
    </Box>
  );
};

export default LoginForm;
