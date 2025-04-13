import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { toast } from "react-toastify";

function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => toast.info("Login success"))
      .catch(() => {
        toast.error("login error");
      });
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
