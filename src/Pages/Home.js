import {
  AppBar,
  Box,
  Button,
  Divider,
  Skeleton,
  Toolbar,
  Typography,
} from "@mui/material";
import AuthHeader from "../Components/Auth/AuthHeader";
import CarCard from "../Components/Home/CarCard";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Store/Auth-context";

const Home = () => {
  const authCtx = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCars = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://carservices-server-default-rtdb.firebaseio.com/users/${authCtx.localId}/cars.json`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const cars = await response.json();

      setCars(Object.entries(cars));
      setIsLoading(false);
    };

    try {
      getCars();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
    // setIsLoading(false);
  }, [authCtx.localId]);

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
        {cars &&
          cars.map((car) => {
            const [carId, carInfo] = car;
            return (
              <CarCard
                key={carId}
                brand={carInfo.carBrand}
                carName={carInfo.carName}
                km={carInfo.carKM}
                id={carId}
              />
            );
          })}

        {isLoading && (
          <Box
            display={"grid"}
            gridTemplateColumns="1fr 2.5fr"
            alignItems="stretch"
            columnGap={2}
          >
            <Box sx={{ maxHeight: "18vh" }}>
              <Skeleton variant="text" height={"30%"} />
              <Skeleton variant="text" height={"25%"} />
              <Skeleton variant="text" height={"15%"} />
              <Skeleton variant="text" height={"35%"} />
            </Box>
            <Box>
              <Skeleton
                variant="rectangular"
                height={"18vh"}
                // width={"55vw"}
                sx={{ marginLeft: "auto" }}
              />
            </Box>
          </Box>
        )}

        {!cars && (
          <Typography sx={{ margin: "30vh 0" }} variant="h4">
            Garage is Empty!
          </Typography>
        )}
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
