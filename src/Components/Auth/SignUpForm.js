import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Store/Auth-context";
import LoadingSpinner from "../../UI/LoadingSpinner";
import FormInput from "./FormInput";

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUpForm = () => {
  const { control, handleSubmit, formState, getValues } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPass: "",
    },
  });
  const { errors } = formState;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (userData) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBCrkX0aUvOpsnp-QAW1mds8-r9HDqrWfc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: userData.email,
            password: userData.password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (data.error) throw data;

      setLoading(false);
      authCtx.signup(data.token, userData.fullName);
      navigate("/welcome", { replace: true });
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error.error.message);
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
        name="fullName"
        control={control}
        rules={{ required: "please Enter your name" }}
        render={({ field }) => {
          return (
            <FormInput
              field={field}
              type="text"
              label="full name"
              helperText={errors.fullName?.message}
              error={errors.fullName && true}
            />
          );
        }}
      />
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
      <Controller
        name="confirmPass"
        control={control}
        rules={{
          required: "please enter your password",
          validate: {
            isSame: (value) =>
              getValues().password === value || " it's not the same password",
          },
        }}
        render={({ field }) => {
          return (
            <FormInput
              field={field}
              type="password"
              label="confirm password"
              helperText={errors.confirmPass?.message}
              error={errors.confirmPass && true}
            />
          );
        }}
      />

      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
        Create Account
      </Button>
      <Typography mt={1.5}>
        Already Have an Account?{" "}
        <Typography component={Link} to="/login">
          sign in{" "}
        </Typography>
        now
      </Typography>
    </Box>
  );
};

export default SignUpForm;
