import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormInput from "../Auth/FormInput";
import { useContext } from "react";
import AuthContext from "../../Store/Auth-context";
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
  const authCtx = useContext(AuthContext);
  console.log(authCtx);

  const onSubmit = async (carData) => {
    console.log(carData);

    const id = (Date.now() * Math.random()).toString().slice(0, 11);
    const response = fetch(
      `https://carservices-server-default-rtdb.firebaseio.com/users/${authCtx.localId}/cars/${id}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carBrand: carData.carBrand,
          carName: carData.carName,
          carKM: carData.carKM,
        }),
      }
    );

    const data = (await response).json();
    console.log(data);
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
          <Button
            variant="contained"
            color="error"
            fullWidth
            sx={{ m: 2 }}
            component={Link}
            to="/welcome"
          >
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
