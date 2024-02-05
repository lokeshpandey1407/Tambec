import { Container, IconButton, Stack, Typography } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { Facebook } from "./Icons/facebook";
import { InstagramIcon } from "./Icons/instagram";
import { TwitterIcon } from "./Icons/twitter";
import { LinkedinIcon } from "./Icons/linkedin";

const Footer = () => {
  return (
    <CssVarsProvider>
      <Container
        maxWidth="lg"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          position: "sticky",
        }}
        component="footer"
      >
        <Stack direction={"row"} spacing={1}>
          <IconButton>
            <Facebook height={20} width={20} />
          </IconButton>
          <IconButton>
            <InstagramIcon height={20} width={20} />
          </IconButton>
          <IconButton>
            <TwitterIcon height={20} width={20} />
          </IconButton>
          <IconButton>
            <LinkedinIcon height={20} width={20} />
          </IconButton>
        </Stack>
        <Typography variant="caption">
          Copyright ©2023 All rights reserved
        </Typography>
      </Container>
    </CssVarsProvider>
  );
};

export default Footer;
