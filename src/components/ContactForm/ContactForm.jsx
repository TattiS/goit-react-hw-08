import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

function ContactForm() {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const initInfo = { name: "", number: "" };
  const validScheme = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Check the format: 333-33-33")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const dispatch = useDispatch();

  const submitHandler = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm({
      values: {
        name: "",
        number: "",
      },
    });
  };
  return (
    <Formik
      initialValues={initInfo}
      onSubmit={submitHandler}
      validationSchema={validScheme}
    >
      <Form className={css.contactFormContainer}>
        <label htmlFor={nameInputId} className={css.contactLabel}>
          Name
        </label>
        <Field
          className={css.contactInput}
          type="text"
          name="name"
          id={nameInputId}
        />
        <ErrorMessage className={css.errorMsg} name="name" component="span" />
        <label htmlFor={numberInputId} className={css.contactLabel}>
          Number
        </label>
        <Field
          className={css.contactInput}
          type="tel"
          name="number"
          id={numberInputId}
        />
        <ErrorMessage className={css.errorMsg} name="number" component="span" />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
