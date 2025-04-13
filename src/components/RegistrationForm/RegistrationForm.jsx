import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { TextField, Button, Box } from "@mui/material";

function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form autoComplete="off">
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Username"
              variant="outlined"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;

// import { Formik, Form, Field } from "formik";
// import { useDispatch } from "react-redux";
// import { register } from "../../redux/auth/operations";
// import css from "./RegistrationForm.module.css";
// function RegistrationForm() {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, actions) => {
//     dispatch(register(values));
//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         email: "",
//         password: "",
//       }}
//       onSubmit={handleSubmit}
//     >
//       <Form className={css.form} autoComplete="off">
//         <label className="css.label">
//           Username
//           <Field type="text" name="name" />
//         </label>
//         <label className="css.label">
//           Email
//           <Field type="email" name="email" />
//         </label>
//         <label className="css.label">
//           Password
//           <Field type="password" name="password" />
//         </label>
//         <button type="submit">Register</button>
//       </Form>
//     </Formik>
//   );
// }

// export default RegistrationForm;
