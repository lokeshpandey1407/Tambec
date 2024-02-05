import { Container, Stack, Typography } from "@mui/material";

const AsideSection = () => {
  return (
    <Container
      sx={{
        maxWidth: { md: "60%", sm: "100%", xs: "100%" },
        height: { md: "100vh", sm: "40vh", xs: "40vh" },

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2A9D8F",
      }}
    >
      <Stack>
        <Typography
          sx={{
            fontSize: "clamp(3rem, 13vw, 18rem)",
            fontFamily: "monospace",
            backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
            backgroundClip: "text",
            color: "transparent",
            WebkitBackgroundClip: "text",
          }}
          align="center"
        >
          {"CREATE"}
        </Typography>
        <Typography
          sx={{
            fontSize: "clamp(15px, 4vw, 18px)",
            fontFamily: "monospace",
            backgroundImage: "linear-gradient(45deg, #000000,#666666)",
            backgroundClip: "text",
            color: "transparent",
            WebkitBackgroundClip: "text",
            // letterSpacing: {
            //   base: "2rem",
            //   md: "1.5rem",
            //   sm: "1rem",
            //   xs: ".5rem",
            // },
            letterSpacing: "clamp(.3rem, 5vw, 1.8rem)",
          }}
          align="center"
          fontWeight={"bold"}
        >
          {"YOUR OWN MASTERPIECE"}
        </Typography>
      </Stack>
    </Container>
  );
};

export default AsideSection;
