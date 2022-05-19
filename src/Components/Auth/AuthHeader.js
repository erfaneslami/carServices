import { Typography } from "@mui/material";

const AuthHeader = (props) => {
  return (
    <>
      <Typography
        variant="h1"
        ml={2}
        sx={{ fontSize: "2.8rem", fontWeight: 500 }}
        align="left"
      >
        {props.main}
      </Typography>
      <Typography
        align="left"
        variant="subtitle1"
        ml={2.2}
        mt={-0.7}
        sx={{ fontSize: "1.2rem" }}
      >
        {props.sub}
      </Typography>
    </>
  );
};

export default AuthHeader;
