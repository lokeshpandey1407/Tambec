import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
// import { useAuth } from "../../Contexts/AuthHook";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { CloseOutlined } from "@mui/icons-material";
import DragDropFileUpload from "../Sections/ImageUploader";

const Home = () => {
  // const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [color, setColor] = useState("");

  // const navigate = useNavigate();
  // const { currentUser, logout } = useAuth();

  function handleFileUpload(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  function handleDeleteImage() {
    setImageUrl("");
  }

  return (
    <Box
      sx={{
        backgroundColor: "#2A9D8F",
        minHeight: "200vh",
        paddingTop: "3rem",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ padding: "3.5rem", display: "flex", flexDirection: "column" }}
      >
        <Stack spacing={2}>
          <Typography variant={"h6"}>
            Upload Image for background Change
          </Typography>
          <DragDropFileUpload onFileUpload={handleFileUpload} />

          <Paper
            elevation={1}
            sx={{
              minWidth: "50px",
              maxWidth: { md: "40%", sm: "60%", xs: "100%" },
              minHeight: "200px",
              padding: "5px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover .close-btn ": {
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(.5px)",
                color: "black",
              },
            }}
          >
            {" "}
            {imageUrl ? (
              <>
                <img
                  style={{
                    objectFit: "contain",
                    width: "100%",
                  }}
                  src={imageUrl}
                  alt="Uploaded Image"
                />

                <Tooltip title="Delete image">
                  <IconButton
                    className="close-btn"
                    onClick={handleDeleteImage}
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      color: "white",
                    }}
                  >
                    <CloseOutlined />
                  </IconButton>
                </Tooltip>
              </>
            ) : (
              <Typography variant="caption">
                Upload an image to modify
              </Typography>
            )}
          </Paper>

          <FormControl
            sx={{
              m: 1,
              width: {
                md: "60%",
                sm: "60%",
                xs: "100%",
              },
            }}
            size="small"
          >
            <Typography> Choose Background Color</Typography>
            <Select
              labelId="select-label"
              id="demo-select-small"
              value={color}
              sx={{
                background: "skyblue",
              }}
              placeholder="Choose Background Color"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"White"}>White</MenuItem>
              <MenuItem value={"Black"}>Black</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            sx={{
              border: "1px solid #2A9D8F",
              backgroundColor: "#E9C46A",
              width: "fit-content",
              color: "black",
              ":hover": {
                backgroundColor: "#E9C46A",
              },
              ":disabled": {
                backgroundColor: "lightGrey",
                color: "black",
              },
            }}
            disabled={!imageUrl || !color}
          >
            Change Color
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
