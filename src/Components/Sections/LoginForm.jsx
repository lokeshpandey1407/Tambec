import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../Contexts/AuthHook";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login, currentUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/home");
    } catch {
      setError("Failed to log in. Check your Email and password and try again");
    }
    setLoading(false);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (currentUser && currentUser.email) {
      navigate("/home");
    }
  }, [currentUser, navigate]);
  return (
    <Paper
      elevation={2}
      sx={{
        padding: "10px",
        minWidth: "200px",
        width: "450px",
        borderRadius: "20px",
        minHeight: "300px",
        height: "320px",
        position: "relative",
      }}
    >
      <Typography variant="h5" fontWeight={"bold"} padding={"30px"}>
        Welcome!
      </Typography>
      <Box paddingLeft={"30px"} paddingRight={"30px"}>
        <form onSubmit={handleLogin}>
          <Stack
            direction={"column"}
            marginTop={"20px"}
            spacing={3}
            width={"100%"}
            alignSelf={"center"}
          >
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              }
              required
              id="email"
              label="Email"
              name="email"
              variant="standard"
              placeholder="Email"
              type="text"
              sx={{ fontSize: "14px" }}
              onChange={handleEmailChange}
              value={email}
            />
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
              required
              id="password"
              label="Password"
              name="password"
              variant="standard"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              sx={{ fontSize: "14px" }}
              value={password}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Link
              sx={{
                textDecoration: "none",
                width: "fit-content",
                color: "black",
                cursor: "pointer",
                "&:hover": {
                  transition: "300ms",
                  color: "#2A9D8F",
                },
              }}
              variant="text"
              fontSize={"small"}
            >
              <i>Forget password</i>
            </Link>
            <Box textAlign={"center"}>
              <Button
                sx={{
                  width: "100%",
                  border: "1px solid #2A9D8F",
                  boxShadow: "-2px 2px black",
                  backgroundColor: "#2A9D8F",
                  transition: "400ms",
                  color: "white",
                  ":hover": {
                    boxShadow: "-4.5px 4.5px black",
                    backgroundColor: "#2A9D8F",
                  },
                  ":disabled": {
                    backgroundColor: "#E2DED0",
                    color: "black",
                  },
                }}
                disabled={loading}
                variant="outlined"
                type="submit"
              >
                {loading ? "Logging in..." : "Log In"}
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
      {error && (
        <Alert
          onClose={() => {
            setError("");
          }}
          severity="error"
          sx={{
            position: "absolute",
            top: "-10%",
            right: "6%",
            width: "80%",
          }}
        >
          {error}
        </Alert>
      )}
    </Paper>
  );
};

export default LoginForm;
