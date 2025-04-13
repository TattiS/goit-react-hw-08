import { Box } from "@mui/material";
import AppBar from "../AppBar/AppBar";

function Layout({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
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
