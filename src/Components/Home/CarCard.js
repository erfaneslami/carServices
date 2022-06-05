import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import towOSeven from "../../Assets/img/207.png";
import towOSix from "../../Assets/img/206.png";
import pars from "../../Assets/img/pars.png";
import bereliance from "../../Assets/img/bereliance.png";
import tara from "../../Assets/img/tara.png";
import rana from "../../Assets/img/rana.png";
import vitara from "../../Assets/img/vitara.png";
import defaultImg from "../../Assets/img/default.svg";
import { Link, useNavigate } from "react-router-dom";

const CarCard = (props) => {
  const navigate = useNavigate();
  const cover =
    `${props.carName}`.toLowerCase() === "207"
      ? towOSeven
      : `${props.carName}`.toLowerCase() === "206"
      ? towOSix
      : `${props.carName}`.toLowerCase() === "pars" ||
        `${props.carName}`.toLowerCase() === "persia"
      ? pars
      : `${props.carName}`.toLowerCase() === "vitara"
      ? vitara
      : `${props.carName}`.toLowerCase() === "rana"
      ? rana
      : `${props.carName}`.toLowerCase() === "tara"
      ? tara
      : `${props.carName}`.toLowerCase() === "bereliance"
      ? bereliance
      : defaultImg;

  return (
    <Card>
      <CardActionArea sx={{ display: "flex", justifyContent: "space-around" }}>
        <CardContent>
          <Typography variant="h5">{props.brand}</Typography>
          <Typography variant="h6">{props.carName}</Typography>
          <Typography variant="subtitle1">{props.km} KM</Typography>
          <Button
            variant="contained"
            component={Link}
            to={props.id}
            sx={{ margin: "2rem 0" }}
          >
            Detail
          </Button>
        </CardContent>
        <CardMedia component="img" image={cover} sx={{ maxWidth: "50vw" }} />
      </CardActionArea>
    </Card>
  );
};

export default CarCard;
