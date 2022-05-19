import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const AuthHeader = (props) => {
  return (
    <Box component={"header"} sx={{ textAlign: "left" }}>
      <Typography
        variant="h1"
        ml={2}
        sx={{ fontSize: "2.8rem", fontWeight: 500 }}
      >
        {props.main}
      </Typography>
      <Typography
        variant="subtitle1"
        ml={2.2}
        mt={-0.7}
        sx={{ fontSize: "1.2rem" }}
      >
        {props.sub}
      </Typography>
    </Box>
  );
};

export default AuthHeader;
