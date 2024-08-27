"use client";
import "animate.css";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/actions/auth/login";
import { IoInformationCircle } from "react-icons/io5";
import { useEffect } from "react";

interface Props {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  console.log(errorMessage);
  useEffect(() => {
    if (errorMessage === "Success") {
      window.location.replace("/admin");
    }
  }, [errorMessage]);
  

  return (
    <form
      action={dispatch}
      className=" lg:min-h-screen justify-center flex items-center animate__animated animate__fadeIn"
    >
      <div className=" bg-jordy-blue-100 lg:bg-jordy-blue-50 rounded-lg lg:shadow-lg lg:max-w-md w-full p-20">
        <div className="my-10">
          <label className="text-jordy-blue-700">Email</label>
          <input
            id="email"
            className={
              " shadow appearance-none border border-jordy-blue-500  rounded w-full py-3 px-3 text-gray-700 bg-gray-300 focus:bg-jordy-blue-200 focus:outline-none focus:ring-1 focus:jordy-blue-500 transition ease-in-out duration-150 "
            }
            name="email"
            placeholder={"Enter your email"}
            type="email"
          />
        </div>
        <div className="my-10">
          <label className="text-jordy-blue-700">Password</label>
          <input
            id="password"
            className={
              " shadow appearance-none border border-jordy-blue-500  rounded w-full py-3 px-3 text-gray-700 bg-gray-300 focus:bg-jordy-blue-200 focus:outline-none focus:ring-1 focus:jordy-blue-500 transition ease-in-out duration-150 "
            }
            name="password"
            placeholder={"*****"}
            type="password"
          />
        </div>

        <div>
          <LoginButton />
        </div>
        <div
          className="flex flex-row mt-5 items-end"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage === "invalidCredentials" ? 
            <>
              <IoInformationCircle className="h-5  text-danger" />
              <p className="text-sm text-danger">{errorMessage}</p>
            </>
            : errorMessage === "Success" && <>
              <IoInformationCircle className="h-5  text-success" />
              <p className="text-sm text-success">{errorMessage}</p>
            </> 
            
          }
        </div>
      </div>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className=" bg-jordy-blue-600 hover:bg-jordy-blue-900 text-white font-bold py-2 lg:minw-24 lg:rounded focus:outline-none focus:shadow-outline w-full"
      type="submit"
      disabled={pending}
    >
      Submit
    </button>
  );
};

