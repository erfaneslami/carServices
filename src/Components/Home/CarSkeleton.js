import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";

const CarSkeleton = () => {
  return (
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
  );
};

export default CarSkeleton;
