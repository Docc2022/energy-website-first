import { createTheme, PaletteColorOptions } from "@mui/material";
import { grey, red, white } from "../colors";

export const whiteTheme = createTheme({
  palette: {
    primary: { main: white["900"], contrastText: white["900"] },
    secondary: {
      main: white["900"],

      light: white["900"],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          backgroundColor: "transparent",

          ":hover": {
            backgroundColor: grey["900"],
          },

          "&.MuiButton-containedSecondary": {
            backgroundColor: grey["900"],
          },
        },
      },
    },
  },
});
