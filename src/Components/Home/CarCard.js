import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import towOSeven from "../../Assets/img/207.png";

const CarCard = (props) => {
  return (
    <Card>
      <CardActionArea sx={{ display: "flex", justifyContent: "space-around" }}>
        <CardContent>
          <Typography variant="h5">{props.brand}</Typography>
          <Typography variant="h6">{props.carName}</Typography>
          <Typography variant="subtitle1">{props.km} KM</Typography>
          <Button variant="contained" sx={{ margin: "2rem 0" }}>
            Detail
          </Button>
        </CardContent>
        <CardMedia
          component="img"
          image={towOSeven}
          sx={{ maxWidth: "50vw" }}
        />
      </CardActionArea>
    </Card>
  );
};

export default CarCard;
