import { Box, Divider } from "@mui/material";
import AuthHeader from "../Components/Auth/AuthHeader";

const AddCar = () => {
  <Box
    component={"main"}
    p={2}
    sx={{ height: "100vh" }}
    textAlign="center"
    display="flex"
    flexDirection="column"
  >
    <Box sx={{ mt: 2 }}>
      <AuthHeader main="Add your Car" sub="s" />
    </Box>
    <Divider sx={{ margin: "1rem 0" }} />
  </Box>;
};

export default AddCar;
