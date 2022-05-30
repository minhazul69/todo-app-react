import React, { useRef } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, userCreateError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  if (user) {
    setTimeout(() => {
      toast.success("Create User Successfull");
    }, 2000);
    navigate("/");
  }
  if (userCreateError) {
    toast.error(userCreateError?.message);
  }
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  return (
    <div className="flex items-center justify-center my-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>
          <div>
            <form onSubmit={handleSignUp}>
              <label className="label">
                <span className="label-name">Name</span>
              </label>
              <input
                ref={nameRef}
                type="text"
                placeholder="Name"
                className="input input-bordered input-primary w-full max-w-xs "
                required
              />
              <label className="label">
                <span className="label-email">Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                className="input input-bordered input-primary w-full max-w-xs "
                required
              />
              <label className="label">
                <span className="label-password">password</span>
              </label>
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                required
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <input
                className="btn btn-outline btn-block mt-5"
                type="submit"
                value="Sign Up"
                required
              />
            </form>
            <p className="text-center mt-5">
              Already Have An Account ?{" "}
              <Link className="text-primary font-bold" to="/Login">
                Login
              </Link>
            </p>
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
