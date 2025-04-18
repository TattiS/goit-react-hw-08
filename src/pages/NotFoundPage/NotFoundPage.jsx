import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
      px={2}
      bgcolor="#f9f9f9"
    >
      <Typography variant="h1" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Ups! Such page hasn't been found
      </Typography>
      <Typography variant="body1" mb={3}>
        Please, check the url
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/"
        sx={{
          padding: "10px 20px",
          borderRadius: "20px",
          textTransform: "none",
        }}
      >
        Go back Home
      </Button>
    </Box>
  );
}

export default NotFoundPage;
