import React, { useEffect, useRef } from "react";
import "./Auth.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoWhite from "../../assets/images/svg/logowhite.svg";

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const validate = (values: FormValues) => {
    const errors: Record<string, string> = {};

    if (!values.email) {
      errors.email = "Please fill out this field";
    } else if (values.email.length < 4) {
      errors.email = "Must be 5 characters or more";
    }

    if (!values.password) {
      errors.password = "Please fill out this field";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setTimeout(() => {
        toast.success(
          JSON.stringify("Successfully submitted login information.", null, 2),
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
        resetForm();
      }, 500);
    },
  });

  useEffect(() => {
    document.title = "PiggyVest | Dashboard";
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  return (
    <div className="loginPage">
      <Link className="authHeader flex" to="/">
        <img src={LogoWhite} alt="" />
      </Link>
      <div className="login flex">
        <div className="formHead flex">
          <h1>Login to your account</h1>
          <p>Securely login to your PiggyVest</p>
        </div>
        <form className="flex" onSubmit={formik.handleSubmit}>
          <div className="formGroup flex">
            <label className="label" htmlFor="email">
              Email or Phone Number
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="input"
              type="text"
              name="email"
              ref={emailRef}
              required
              autoComplete="email address / phone number"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="formGroup flex">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className="input"
              type="password"
              name="password"
              required
              autoComplete="current-password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <button className="button" type="submit">
            LOG IN
          </button>
        </form>
      </div>

      <Link to="/register" className="footLink">
        Don't have an account? Register
      </Link>
      <Link to="#" className="footLink forget">
        Forgot Password?
      </Link>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Login;
