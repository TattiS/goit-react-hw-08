import LoginForm from "../../components/LoginForm/LoginForm";
import { Box, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <>
      <title>Login</title>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Log In
        </Typography>
        <LoginForm />
      </Box>
    </>
  );
}

// import LoginForm from "../../components/LoginForm/LoginForm";
// export default function LoginPage() {
//   return (
//     <>
//       <title>Login</title>
//       <LoginForm />
//     </>
//   );
// }
