import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import FormInput from "../Auth/FormInput";

const AddCarForm = () => {
  const { control, handleSubmit, formState } = useForm({
    mode: "onBlur",
    defaultValues: {
      carBrand: "",
      carName: "",
      carKM: "",
    },
  });

  const { errors } = formState;

  const onSubmit = (carData) => {
    console.log(carData);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "70vw", margin: "0 auto" }}
    >
      <Controller
        name="carBrand"
        control={control}
        rules={{
          required: "please enter your Car Compony",
        }}
        render={({ field }) => {
          return (
            <FormInput
              field={field}
              type="text"
              label="Compony"
              helperText={errors.carBrand?.message}
              error={errors.carBrand && true}
            />
          );
        }}
      />
      <Controller
        name="carName"
        control={control}
        rules={{
          required: "please enter your Car name",
        }}
        render={({ field }) => {
          return (
            <FormInput
              field={field}
              type="text"
              label="Car Name"
              helperText={errors.carName?.message}
              error={errors.carName && true}
            />
          );
        }}
      />
      <Controller
        name="carKM"
        control={control}
        rules={{
          required: "please enter your Car KM",
        }}
        render={({ field }) => {
          return (
            <FormInput
              field={field}
              type="text"
              label="Car KM"
              helperText={errors.carKM?.message}
              error={errors.carKM && true}
            />
          );
        }}
      />

      <AppBar position="fixed" color="" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar sx={{ width: "100%" }}>
          <Button variant="contained" color="error" fullWidth sx={{ m: 2 }}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" fullWidth sx={{ m: 2 }}>
            Add
          </Button>
        </Toolbar>
      </AppBar>

      {/* <Box>
        <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
          Add
        </Button>
        <Button
          variant="contained"
          color="error"
          type="submit"
          fullWidth
          sx={{ mt: 2 }}
        >
          Cancel
        </Button>
      </Box> */}
    </Box>
  );
};

export default AddCarForm;
