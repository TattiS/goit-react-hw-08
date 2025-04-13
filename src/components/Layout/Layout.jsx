import { Container, Box } from "@mui/material";
import AppBar from "../AppBar/AppBar";

function Layout({ children }) {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          gap: 4,
        }}
      >
        <AppBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </Container>
  );
}

export default Layout;

// import AppBar from "../AppBar/AppBar";
// import css from "./Layout.module.css";
// function Layout({ children }) {
//   return (
//     <div className={css.container}>
//       <AppBar />
//       {children}
//     </div>
//   );
// }

// export default Layout;
