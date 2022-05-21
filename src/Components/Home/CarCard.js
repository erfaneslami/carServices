import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import divaf from "../../Assets/img/207.png";

const CarCard = () => {
  return (
    <Card>
      <CardActionArea sx={{ display: "flex" }}>
        <CardContent>
          <Typography>PEUGEOT</Typography>
          <Typography>207</Typography>
          <Typography>30,000 KM</Typography>
        </CardContent>
        <CardMedia component="img" image={divaf} sx={{ maxWidth: "70%" }} />
      </CardActionArea>
    </Card>
  );
};

export default CarCard;
