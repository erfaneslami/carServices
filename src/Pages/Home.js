import { Box, Divider, Typography } from "@mui/material";
import AuthHeader from "../Components/Auth/AuthHeader";
import CarCard from "../Components/Home/CarCard";

const Home = () => {
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
        <AuthHeader main="erfan's Garage" sub="welcome" />
      </Box>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box
        display="grid"
        gridTemplateColumns="repeat(1,1fr)"
        gap={2}
        // sx={{ overflowY: "scroll" }}
      >
        {/* <CarCard brand="Peugeot" carName="207" km="30.000" />
        <CarCard brand="Peugeot" carName="Pars" km="170.000" /> */}
        <Typography sx={{ margin: "30vh 0" }} variant="h4">
          Garage is Empty!
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
