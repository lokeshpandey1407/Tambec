/* eslint-disable react/prop-types */

import { AppBar, Button, Stack } from "@mui/material";
import { Category } from "@mui/icons-material";
import { useAuth } from "../Contexts/AuthHook";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ navigationItems }) => {
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
        backgroundColor: "#36454F",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"10px"}
      >
        <Category sx={{ color: "#E9C46A" }} fontSize="large" />

        {currentUser && currentUser.email && (
          <>
            <Stack
              direction={"row"}
              gap={5}
              alignItems={"center"}
              padding={"10px"}
            >
              {navigationItems.map((item) => (
                <Button
                  key={item.link}
                  disableRipple={true}
                  size="large"
                  sx={{
                    color: "white",
                    padding: "5px 10px",
                    border: ".5px solid white",
                    "&:hover": {
                      backgroundColor: "#E9C46A",
                      color: "#36454F",
                      border: ".5px solid white",
                    },
                  }}
                  component={Link}
                  to={item.link}
                >
                  {item.title}
                </Button>
              ))}
            </Stack>
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
          </>
        )}
      </Stack>
    </AppBar>
  );
};

export default Header;
