import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const AuthHeader = () => {
  return (
    <Box component={"header"} sx={{ textAlign: "left" }}>
      <Typography
        variant="h1"
        ml={2}
        sx={{ fontSize: "2.8rem", fontWeight: 500 }}
      >
        Get started
      </Typography>
      <Typography variant="subtitle1" ml={2} sx={{ fontSize: "1.4rem" }}>
        Create an Account
      </Typography>
    </Box>
  );
};

export default AuthHeader;
