import { useCallback, useState } from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import { CloudUploadOutlined } from "@mui/icons-material";

function DragDropFileUpload({ onFileUpload }) {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((event) => {
    event.preventDefault();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      setDragOver(false);
      if (event.dataTransfer.files && event.dataTransfer.files[0]) {
        onFileUpload(event.dataTransfer.files[0]);
      }
    },
    [onFileUpload]
  );

  const handleChange = useCallback(
    (event) => {
      if (event.target.files && event.target.files[0]) {
        onFileUpload(event.target.files[0]);
      }
    },
    [onFileUpload]
  );

  return (
    <Paper
      variant="outlined"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      sx={{
        minHeight: "40px",
        width: { md: "60%", sm: "60%", xs: "100%" },
        textAlign: "center",
        cursor: "pointer",
        background: "skyblue",
      }}
    >
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="raised-button-file">
        <Box display="flex" flexDirection="row" alignItems="center" gap={"2%"}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <CloudUploadOutlined fontSize="small" />
          </IconButton>
          <Typography variant="body2">Drag or click to select files</Typography>
        </Box>
      </label>
    </Paper>
  );
}

export default DragDropFileUpload;
