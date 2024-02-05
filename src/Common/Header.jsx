/* eslint-disable react/prop-types */

import { AppBar, Button, Stack } from "@mui/material";
import { Category } from "@mui/icons-material";
import { useAuth } from "../Contexts/AuthHook";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handlelogout() {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        // backgroundColor: "#2A9D8F",
        backgroundColor: "transparent",
        // -webkit-backdrop-filter: blur(8px);
        backdropFilter: "blur(10px)",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"10px"}
      >
        <Category sx={{ color: "#E9C46A" }} fontSize="large" />
        {/* {navigationItems.map((item) => (
          <Button
            key={item.link}
            disableRipple={true}
            size="small"
            sx={{
              "&:hover": { backgroundColor: "transparent" },
              padding: "0px",
            }}
            component={Link}
            to={item.link}
          >
            {item.title}
          </Button>
        ))} */}
        {currentUser && currentUser.email && (
          <Button
            sx={{
              border: "1px solid #2A9D8F",
              boxShadow: "-2px 2px black",
              backgroundColor: "#E9C46A",
              transition: "400ms",
              color: "black",
              ":hover": {
                boxShadow: "-4.5px 4.5px black",
                backgroundColor: "#E9C46A",
              },
              ":disabled": {
                backgroundColor: "#E2DED0",
                color: "black",
              },
            }}
            variant="outlined"
            onClick={handlelogout}
          >
            Logout
          </Button>
        )}
      </Stack>
    </AppBar>
  );
};

export default Header;
