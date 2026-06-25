import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validate: values => {
            const errors = {};
            if (!values.username) {
                errors.username = "Username is required";
            }
            if (!values.password) {
                errors.password = "Password is required";
            }
            return errors;
        },
        onSubmit: values => {
            navigate("/home");
        }
    });

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={formik.handleSubmit}>
                <h2>Login</h2>
                <label>
                    Username
                    <input
                        type="text"
                        name="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                </label>
                {formik.touched.username && formik.errors.username ? (
                    <div className="error-msg">{formik.errors.username}</div>
                ) : null}
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                </label>
                {formik.touched.password && formik.errors.password ? (
                    <div className="error-msg">{formik.errors.password}</div>
                ) : null}
                {formik.errors.submit ? (
                    <div className="error-msg">{formik.errors.submit}</div>
                ) : null}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
