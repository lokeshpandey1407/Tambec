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
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
// import { useAuth } from "../../Contexts/AuthHook";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { CloseOutlined } from "@mui/icons-material";
import { ContentCopy } from "@mui/icons-material";
import DragDropFileUpload from "../Sections/ImageUploader";
import { Done } from "@mui/icons-material";
let text = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
sequi praesentium, unde, labore rerum aliquam doloremque obcaecati
numquam laborum earum cumque dolorem atque eius alias provident
suscipit similique officiis impedit. Lorem ipsum dolor sit amet
consectetur adipisicing elit. Doloremque vel cumque ad deleniti
vero amet quo magni doloribus alias debitis, expedita quaerat.
Mollitia tempora laborum veritatis ducimus est excepturi maxime!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
consequuntur iure itaque eos sequi libero? Ad tempora recusandae
ipsam explicabo? Sint minima minus voluptatibus mollitia tempora
voluptate? Enim, aliquam explicabo!`;

const Home = () => {
  // const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [color, setColor] = useState("");
  const [platform, setPlatform] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isTextCopied, setIsTextCopied] = useState(false);

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
  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  function handleDeleteImage() {
    setImageUrl("");
  }

  function generateText() {
    setGeneratedText(text);
  }

  function copyGeneratedResponse() {
    navigator.clipboard
      .writeText(generatedText)
      .then(() => {
        setIsTextCopied(true);
        setTimeout(() => {
          setIsTextCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Box
      sx={{
        backgroundColor: "#2A9D8F",
        minHeight: "100vh",
        paddingTop: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "60%",
          padding: "3.5rem",
          backgroundColor: "#2A9D8F",
        }}
      >
        <Stack spacing={2}>
          <Typography variant={"h5"}>
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
            <Typography variant="h5" marginBottom={"1rem"}>
              Choose Background Color
            </Typography>
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
            <Typography variant="h5" marginBottom={"1rem"}>
              Text Generation
            </Typography>
            <TextField
              id="text-generation-input"
              label="Enter your text prompt"
              variant="outlined"
              size="small"
              sx={{ background: "skyblue" }}
              required
            />
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
            onClick={generateText}
            // disabled={!imageUrl || !color}
          >
            Generate Text
          </Button>
          <Typography variant="body1">Generated Text</Typography>
          <Paper
            sx={{
              width: {
                md: "60%",
                sm: "60%",
                xs: "100%",
              },
              position: "relative",
              minHeight: "2.5rem",
            }}
          >
            {generatedText && (
              <Tooltip title="Copy text">
                <IconButton
                  sx={{
                    cursor: "pointer",
                    position: "absolute",
                    top: ".2rem",
                    right: ".5rem",
                  }}
                  onClick={copyGeneratedResponse}
                >
                  {isTextCopied ? (
                    <Done fontSize="small" />
                  ) : (
                    <ContentCopy fontSize="small" />
                  )}
                </IconButton>
              </Tooltip>
            )}
            <Typography sx={{ padding: "2rem 1rem 1rem 1rem" }}>
              {generatedText}
            </Typography>
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
            <Typography variant="h5" marginBottom={"1rem"}>
              Select the platform
            </Typography>
            <Select
              labelId="select-label"
              id="demo-select-small"
              value={platform}
              sx={{
                background: "skyblue",
              }}
              placeholder="Select the platform for UPload"
              onChange={handlePlatformChange}
            >
              <MenuItem value="">
                <em
                  onClick={() => {
                    setPlatform("");
                  }}
                >
                  None
                </em>
              </MenuItem>
              <MenuItem value={"Shopify"}>Shopify</MenuItem>
              <MenuItem value={"Wordpress"}>Wordpress</MenuItem>
              <MenuItem value={"Magento"}>Magento</MenuItem>
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
            disabled={!platform}
          >
            Upload
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Home;
