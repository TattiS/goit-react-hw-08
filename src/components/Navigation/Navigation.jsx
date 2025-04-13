import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { styled, Box } from "@mui/material";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  margin: theme.spacing(1),
  fontWeight: 500,
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Box>
  );
}

export default Navigation;

// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import css from "./Navigation.module.css";

// function Navigation() {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return (
//     <nav>
//       <NavLink className={css.link} to="/">
//         Home
//       </NavLink>
//       {isLoggedIn && (
//         <NavLink className={css.link} to="/contacts">
//           Contacts
//         </NavLink>
//       )}
//     </nav>
//   );
// }

// export default Navigation;
