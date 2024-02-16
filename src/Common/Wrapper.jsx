import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
const navigationItems = [
  { title: "Home", link: "/home" },
  { title: "Products", link: "/products" },
];
const Wrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header navigationItems={navigationItems} />
      <Box sx={{ minHeight: "70vh" }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Wrapper;
