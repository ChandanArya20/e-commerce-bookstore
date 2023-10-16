import "../css/login_page.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContex";
import ClipLoader from "react-spinners/ClipLoader";

const LoginWithEmailPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { loginUser } = useContext(UserContext);

    // Function to handle user login
    const doLoginUser = async (data) => {
        try {
            setLoading(true);
            let response = await fetch(`${process.env.REACT_APP_API_URL}/user/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                const userData = await response.json();
                loginUser(userData, () => {
                    navigate("/");
                });
                setLoading(false);
            } else if (response.status === 500) {
                const errorDetails = await response.json();
                throw new Error(errorDetails.status);
            } else {
                const errorMessage = await response.text();
                toast.error(errorMessage, {
                    position: "top-center",
                    theme: "dark",
                });
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            const errorObj = { errorMessage: error.message };
            navigate("/errorPage", { state: errorObj });
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-page">
                <h1>Login</h1>
                <p className="login-with-phone-link">
                    <Link to="/userPhoneLogin">Login with Phone?</Link>
                </p>
                <form onSubmit={handleSubmit(doLoginUser)}>
                    {/* Input fields for email and password */}
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid email address!",
                            },
                        })}
                    />
                    <p className="error-message">{errors.email?.message}</p>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: "Enter password",
                            minLength: {
                                value: 8,
                                message: "Password should not be less than 8",
                            },
                            maxLength: {
                                value: 15,
                                message:
                                    "Password should not be greater than 15",
                            },
                        })}
                    />
                    <p className="error-message">{errors.password?.message}</p>

                    {/* Forgot password link */}
                    <p className="forgot-password-link">
                        <Link to="/userForgotPassEmail">Forgot password?</Link>
                    </p>

                    {/* Login button */}
                    <button
                        type="submit"
                        className="login-button"
                        disabled={loading ? true : false}
                    >
                        {loading ? "Waiting..." : "Login"}
                        {loading && (
                            <div className="loading-overlay-btn">
                                <ClipLoader color="#620c88" />
                            </div>
                        )}
                    </button>
                </form>

                {/* Create an account link */}
                <p className="create-account-link">
                    New user? <Link to="/userSignUp">Create an account</Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginWithEmailPage;
