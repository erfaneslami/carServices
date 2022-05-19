import { Box, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import FormInput from "./FormInput";

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

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "70vw", margin: "0 auto" }}
    >
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
        sign up
      </Button>
    </Box>
  );
};

export default SignUpForm;
