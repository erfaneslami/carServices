import { Box, Divider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthHeader from "../Components/Auth/AuthHeader";
import AuthContext from "../Store/Auth-context";

const CarDetail = () => {
  const params = useParams();
  const authCtx = useContext(AuthContext);

  const [car, setCar] = useState();

  console.log();
  useEffect(() => {
    const getCarDetail = async () => {
      const response = await fetch(
        `https://carservices-server-default-rtdb.firebaseio.com/users/${authCtx.localId}/cars/${params.carId}.json`,
        {
          method: "GET",
        }
      );

      if (!response.ok) throw Error("something went wrong please try again");

      const data = await response.json();

      setCar(data);
    };

    getCarDetail().catch((error) => {
      console.log(error);
    });
  }, []);

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
        <AuthHeader main={car.carName} sub="" />
      </Box>
      <Divider sx={{ margin: "1rem 0" }} />{" "}
    </Box>
  );
};

export default CarDetail;
