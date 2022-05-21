import { Box, Divider } from "@mui/material";
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
      <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={2}>
        <Box>
          <CarCard />
        </Box>
        <Box>card2</Box>
      </Box>
    </Box>
  );
};

export default Home;
