import { Box, Typography } from "@mui/material";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
  return (
    <>
      <title>Registration</title>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
        px={2}
      >
        <Typography variant="h3" gutterBottom>
          Create an Account
        </Typography>
        <RegistrationForm />
      </Box>
    </>
  );
}

// import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

// export default function RegistrationPage() {
//   return (
//     <>
//       <title>Registration</title>
//       <RegistrationForm />
//     </>
//   );
// }
