import React, { useState } from "react";
import styles from "../styles/styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../axiosbaseUrl/axios";
import { FiLoader } from "react-icons/fi";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassWord, setshowPassWoed] = useState(false);
  const [isError, setisError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleForm = ({ name, value }: { name: string; value: string }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSummitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password, rememberMe } = form;

    setIsLoading(true);

    try {
      await axiosInstance
        .post("/user/login-user", { email, password, rememberMe })
        .then((data) => {
          console.log(data.data);

          toast.success(data.data.message);
          navigate("/");
          setForm({ ...form, email: "", password: "", rememberMe: false });
          setIsLoading(false);
        })
        .catch((error: any) => {
          console.log(error);
          setisError(true);
          toast.error(error.response?.data.error);
          setIsLoading(false);

          return;
        });
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.response?.data.error);
    }
  };

  return (
    <div className="min-h-screen flex text-white  bg-secondary  flex-col items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <h2 className="text-3xl font-extrabold text-center">
          Login Your Account
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md ">
          <div className="bg-primary py-8 px-8 sm:px-10">
            <form className="space-y-6" onSubmit={handleSummitForm}>
              <div>
                <label
                  htmlFor="email"
                  className="font-medium text-white text-sm mb-2"
                >
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    required
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) =>
                      handleForm({ name: "email", value: e.target.value })
                    }
                    className={`${styles.input} p-3 ${
                      isError
                        ? "border-b-[4px] border-red-400"
                        : "border-b-[4px] border-green-400"
                    }`}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-medium text-white text-sm"
                >
                  password
                </label>
                <div
                  className={`mt-2 ${
                    styles.noramlFlex
                  } justify-between rounded-[5px] bg-inputColor ${
                    isError
                      ? "border-b-[4px] border-red-400"
                      : "border-b-[4px] border-green-400"
                  } `}
                >
                  <div className="w-full">
                    <input
                      type={`${showPassWord ? "text" : "password"}`}
                      required
                      name="password"
                      autoComplete="password"
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={(e) =>
                        handleForm({ name: "password", value: e.target.value })
                      }
                      className={`${styles.input} p-3 `}
                    />
                  </div>
                  <div
                    onClick={() => setshowPassWoed((pre) => !pre)}
                    className="mr-5 cursor-pointer"
                  >
                    {showPassWord ? (
                      <AiOutlineEye color="white" size={20} />
                    ) : (
                      <AiOutlineEyeInvisible color="white" size={20} />
                    )}
                  </div>
                </div>
              </div>
              <div className={`${styles.noramlFlex} justify-between`}>
                <div className={`${styles.noramlFlex} justify-between`}>
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    accept="remember-me"
                    checked={form.rememberMe}
                    onChange={(e) =>
                      setForm({ ...form, rememberMe: e.target.checked })
                    }
                    className={` h-5 w-5 mr-2 cursor-pointer focus:ring-green-400 border-b-orange-500 text-green-400 rounded`}
                  />
                  <label
                    htmlFor="remember-me"
                    className="font-md cursor-pointer"
                  >
                    remember me
                  </label>
                </div>
                <div>
                  <div className="font-md font-semibold cursor-pointer text-green-400">
                    <Link to="/reset-password" target="_blank">
                      Forgot your password
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className={` flex items-start justify-center font-semibold w-full text-center text-lg bg-green-400 p-3 rounded-md`}
                >
                  {isLoading ? (
                    <>
                      <FiLoader color="white" size={20} className="mr-3" />
                      <span className="text-sm font-semibold">
                        Please wait...
                      </span>
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
              <div className="flex items-center justify-end">
                <p>Don't have an account ?</p>
                <Link
                  to="/sign-up"
                  className="ml-4 font-semibold text-green-400 text-lg"
                >
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
