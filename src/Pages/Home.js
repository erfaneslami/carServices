import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  // Typography,
} from "@mui/material";
import AuthHeader from "../Components/Auth/AuthHeader";
import CarCard from "../Components/Home/CarCard";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

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
        <CarCard brand="Peugeot" carName="207" km="30.000" />
        <CarCard brand="Peugeot" carName="Pars" km="170.000" />
        <CarCard brand="Peugeot" carName="Pars" km="170.000" />
        <CarCard brand="Peugeot" carName="Pars" km="170.000" />
        <CarCard brand="Peugeot" carName="Pars" km="170.000" />
        {/* <Typography sx={{ margin: "30vh 0" }} variant="h4">
          Garage is Empty!
        </Typography> */}
      </Box>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar sx={{ width: "100%" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              position: "absolute",
              top: -30,
              left: 0,
              right: 0,
              borderRadius: "50%",
              width: "5rem",
              height: "6rem",
              margin: "0 auto",
            }}
            component={Link}
            to="/add-car"
          >
            <AddIcon fontSize="large" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Home;
