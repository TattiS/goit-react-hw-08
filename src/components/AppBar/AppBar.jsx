import { useSelector } from "react-redux";
import { AppBar as MuiAppBar, Toolbar, Box } from "@mui/material";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar position="static" color="primary" elevation={3}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Navigation />
        <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;

// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import Navigation from "../Navigation/Navigation";
// import UserMenu from "../UserMenu/UserMenu";
// import AuthNav from "../AuthNav/AuthNav";
// import css from "./AppBar.module.css";

// function AppBar() {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return (
//     <header className={css.header}>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// }

// export default AppBar;
