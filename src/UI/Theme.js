import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiInput: {
      variants: [
        {
          props: { variant: "mobile", color: "red" },
          style: {
            color: "red",
          },
        },
      ],
    },
  },
});

export default theme;
