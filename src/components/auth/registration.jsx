import React from "react";
import { Formik } from "formik";
import axios from "axios";

export default function Registration() {
  return (
    <div>
      <h1>Login</h1>
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
          axios
            .post(
              "http://localhost:3000/registrations",
              {
                user: values,
              },
              { credential: true }
            )
            .then((response) => {
              console.log("resgistration successfull", response);
            })
            .catch((response) => {
              console.log("registration error", response);
            });
          setTimeout(() => {
            console.log({ user: JSON.stringify(values, null, 2) });
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
    </div>
  );
}
