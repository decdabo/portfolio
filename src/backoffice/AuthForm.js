import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { login } from "../reducers/actions/auth";
import { useDispatch } from "react-redux";

const AuthForm = ({ location: { pathname } }) => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === "/auth") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [pathname]);

  const initialValues = isLogin
    ? { email: "", password: "" }
    : { email: "", name: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!isLogin) {
          if (!values.name && !isLogin) {
            errors.name = "Name is required";
          } else if (values.name.length <= 2 && !isLogin) {
            errors.name = "Name too short";
          }
        }

        if(!values.password) {
          errors.password = "Password is required"
        } else if (values.password.length < 5) {
          errors.password = "Password too short"
        }

        return errors;
      }}
      onSubmit={ (values, { setSubmitting }) => {
        const newValues = isLogin
          ? {
              email: values.email,
              password: values.password,
            }
          : values;
        if (isLogin) {
          dispatch(login(newValues, 'login'))
        } else {
          dispatch(login(newValues))
        }
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
        <form className="backoffice__form" onSubmit={handleSubmit}>
          {isLogin ? <h1>Backoffice Login</h1> : <h1>Backoffice Register</h1>}
          <label>Email</label>
          <input
            className="form__input"
            autoComplete="off"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && (
            <h5 className="form__text-alert">{errors.email}</h5>
          )}
          {isLogin ? (
            <></>
          ) : (
            <>
              <label>Name</label>
              <input
                className="form__input"
                autoComplete="off"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </>
          )}
          {errors.name && touched.name && (
            <h5 className="form__text-alert">{errors.name}</h5>
          )}
          <label>Password</label>
          <input
            className="form__input"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && (
            <h5 className="form__text-alert">{errors.password}</h5>
          )}
          {isLogin ? (
            <>
              <button
                className="form__button"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
              <label>
                <Link className="form__link" to="/register">
                  Not Account? Register!
                </Link>
              </label>
            </>
          ) : (
            <>
              <button
                className="form__button"
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </button>
              <label>
                <Link className="form__link" to="/auth">
                  Have account? Login!
                </Link>
              </label>
            </>
          )}
        </form>
      )}
    </Formik>
  );
};

export default AuthForm;
