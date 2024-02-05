import { Stack } from "@mui/material";
import LoginSection from "../Sections/LoginSection";
import AsideSection from "../Sections/AsideSection";

const Login = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Stack
        direction={{
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        }}
      >
        <AsideSection></AsideSection>
        <LoginSection></LoginSection>
      </Stack>
    </div>
  );
};

export default Login;
