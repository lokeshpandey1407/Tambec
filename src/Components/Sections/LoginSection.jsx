import { Container } from "@mui/material";
import LoginForm from "./LoginForm";

const LoginSection = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#E9C46A",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: { md: "40%", sm: "100%", xs: "100%" },
        height: { md: "100vh", sm: "60vh", xs: "60vh" },
      }}
    >
      <LoginForm />
    </Container>
  );
};

export default LoginSection;
