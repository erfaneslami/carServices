import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../Auth/FormInput";
import AuthContext from "../../Store/Auth-context";
import LoadingSpinner from "../../UI/LoadingSpinner";

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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (carData) => {
    const id = (Date.now() * Math.random()).toString().slice(0, 11);
    try {
      setIsLoading(true);
      const response = await fetch(
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

      const data = await response.json();
      if (data.error) throw data;

      navigate("/welcome");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "70vw", margin: "0 auto" }}
    >
      {isLoading && <LoadingSpinner />}
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
