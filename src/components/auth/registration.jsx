import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Snackbar, useSnackbar } from "../snackbar";
import axios from "axios";

export default function Registration() {
  const dispatch = useDispatch();

  const [snackbarState, setSnackbarState] = React.useState({
    message: "",
    variant: "error",
  });

  const {
    isOpen: isSnackbarOpen,
    open: openSnackbar,
    close: closeSnackbar,
  } = useSnackbar();
  const handleSuccesfullAuth = (data) => {
    setSnackbarState({
      message: "User was created succesfully",
      variant: "success",
    });
    console.log(data);
    openSnackbar();
  };
  const handleUnsuccessfullAuth = (data) => {
    setSnackbarState({
      message: data.errors.length > 0 ? data.errors.join(",") : data.errors[0],
      variant: "error",
    });
    console.log(data);
    openSnackbar();
  };
  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{ email: "", password: "", password_confirmation: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          if (!values.password_confirmation) {
            errors.password_confirmation = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          axios
            .post(
              "http://localhost:3000/registrations",
              {
                user: values,
              },
              { credential: true }
            )
            .then((response) => {
              if (response.data.status === "created") {
                handleSuccesfullAuth(response.data);
              } else if (response.data.status === "error") {
                handleUnsuccessfullAuth(response.data);
              }
            })
            .catch((response) => {
              console.log("registration error", response);
            });
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <input
              type="password"
              name="password_confirmation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password_confirmation}
            />
            {errors.password_confirmation &&
              touched.password_confirmation &&
              errors.password_confirmation}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
      <Snackbar
        isOpen={isSnackbarOpen}
        message={snackbarState.message}
        variant={snackbarState.variant}
        onClose={closeSnackbar}
      />
    </div>
  );
}
