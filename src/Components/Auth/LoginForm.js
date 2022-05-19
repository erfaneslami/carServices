import { Box, Button, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import FormInput from "./FormInput";

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm = () => {
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

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "70vw", margin: "0 auto" }}
    >
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
        Don't have an account ? <Typography component="a">sign up </Typography>
        now
      </Typography>
    </Box>
  );
};

export default LoginForm;
