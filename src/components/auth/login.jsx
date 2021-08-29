import React from "react";
import { Formik } from "formik";
import { Snackbar, useSnackbar } from "../snackbar";
import axios from "axios";

export default function Registration() {
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
      message: "Logged in successfully",
      variant: "success",
    });
    openSnackbar();
  };
  const handleUnsuccessfullAuth = (data) => {
    console.log({ data });
    setSnackbarState({
      message: data.errors.length > 0 ? data.errors.join(",") : data.errors[0],
      variant: "error",
    });
    openSnackbar();
  };
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
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
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          axios
            .post(
              "http://localhost:3000/sessions",
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
              console.log("Login error", response);
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
