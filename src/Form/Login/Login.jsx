import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, signinLoading, signInError] =
    useSignInWithEmailAndPassword(auth);
  let navigate = useNavigate();
  let location = useLocation();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  let from = location.state?.from?.pathname || "/";
  if (user) {
    setTimeout(() => {
      toast.success("User Login SuccessFull");
    }, 2000);
    navigate(from, { replace: true });
  }
  if (signInError) {
    toast.error(signInError?.message);
  }
  const handleLogin = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Please Feild The Input Box");
    }
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="flex items-center justify-center my-10">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-3xl font-bold text-center">Login</h2>
          <div>
            <form onSubmit={handleLogin}>
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                class="input input-bordered input-primary w-full max-w-xs "
              />
              <label class="label">
                <span class="label-text">password</span>
              </label>
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                class="input input-bordered input-primary w-full max-w-xs"
              />
              <input
                className="btn btn-outline btn-block mt-5"
                type="submit"
                value="login"
              />
            </form>
            <p className="text-center mt-5">
              New To ?{" "}
              <Link className="text-primary font-bold" to="/signUp">
                Sign Up
              </Link>
            </p>
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
