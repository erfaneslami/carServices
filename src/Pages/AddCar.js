import { Box, Divider } from "@mui/material";
import AuthHeader from "../Components/Auth/AuthHeader";
import AddCarForm from "../Components/Home/AddCarForm";

const AddCar = () => {
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
        <AuthHeader main="Add your Car" />
      </Box>
      <Divider sx={{ margin: "1rem 0" }} />
      <AddCarForm />
    </Box>
  );
};

export default AddCar;
