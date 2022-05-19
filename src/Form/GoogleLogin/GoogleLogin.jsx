import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const [signInWithGoogle, user, googleloaging, googleError] =
    useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (googleError) {
      const errorMessage = googleError?.message.split(":")[1];
      toast.error(errorMessage);
    }
  }, [googleError]);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        toast.success("User Login SuccessFull");
      }, 1000);
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="my-5">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline w-full"
      >
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default GoogleLogin;
