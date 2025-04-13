import { NavLink } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  margin: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
}));

function AuthNav() {
  return (
    <Box>
      <StyledNavLink to="/register">
        <StyledButton variant="contained" color="primary">
          Register
        </StyledButton>
      </StyledNavLink>
      <StyledNavLink to="/login">
        <StyledButton variant="outlined" color="primary">
          Log In
        </StyledButton>
      </StyledNavLink>
    </Box>
  );
}

export default AuthNav;

// import { NavLink } from "react-router-dom";
// import css from "./AuthNav.module.css";

// function AuthNav() {
//   return (
//     <div>
//       <NavLink className={css.link} to="/register">
//         Register
//       </NavLink>
//       <NavLink className={css.link} to="/login">
//         Log In
//       </NavLink>
//     </div>
//   );
// }

// export default AuthNav;
