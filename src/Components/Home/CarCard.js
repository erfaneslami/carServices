import {
  Button,
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
      <CardActionArea sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardContent>
          <Typography variant="h3">PEUGEOT</Typography>
          <Typography variant="h4">207</Typography>
          <Typography variant="subtitle1">30,000 KM</Typography>
          <Button variant="contained" sx={{ margin: "2rem 0" }}>
            Detail
          </Button>
        </CardContent>
        <CardMedia component="img" image={divaf} sx={{ maxWidth: "55%" }} />
      </CardActionArea>
    </Card>
  );
};

export default CarCard;
