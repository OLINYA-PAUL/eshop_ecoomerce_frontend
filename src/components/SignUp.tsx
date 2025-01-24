import React, { useState } from "react";
import styles from "../styles/styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [showPassWord, setshowPassWoed] = useState(false);
  const [isError, setisError] = useState(false);
  const [avatar, setavatar] = useState<File | null>(null);

  const handleForm = ({ name, value }: { name: string; value: string }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSummitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setisError(true);
    const file = e.target.files?.[0];
    const MAX_FILE_SIZE = 3 * 1024 * 1024;

    const fileExtention = ["image/jpeg", "image/png"];

    if (file && !file.type.includes(fileExtention[0]))
      return toast.error("Please select a valid image file (JPEG, PNG, etc.).");
    if (file && file?.size > MAX_FILE_SIZE)
      return toast.error("File size must be less than 3MB");

    if (file && typeof file.type === "string") {
      setavatar(file);
      setisError(false);
    }
  };

  return (
    <div className="min-h-screen flex text-white  bg-secondary  flex-col items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <h2 className="text-3xl font-extrabold text-center">
          Create New Account
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md ">
          <div className="bg-primary py-8 px-8 sm:px-10">
            <form className="space-y-6" onSubmit={() => handleSummitForm}>
              <div>
                <label
                  htmlFor="email"
                  className="font-medium text-white text-sm mb-2"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    required
                    name="fullName"
                    autoComplete="fullName"
                    placeholder="Enter your fullName"
                    value={form.name}
                    onChange={(e) =>
                      handleForm({ name: "fullName", value: e.target.value })
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
              <div>
                <label htmlFor="avatar" className="block text-sm text-white">
                  <div className={`${styles.noramlFlex} mt-2`}>
                    <span className="inline-block h-10 w-10 rounded-full overflow-hidden mr-5  ">
                      {avatar ? (
                        <img
                          src={URL.createObjectURL(avatar)}
                          alt="avatar"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <svg
                          className="h-full w-full text-green-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </span>
                    <label
                      htmlFor="file-input"
                      className={`${styles.noramlFlex} text-sm font-medium cursor-pointer text-white hover:bg-green-300 justify-center px-4 py-2 rounded-md bg-green-400 shadow-lg`}
                    >
                      <span>Upload a file</span>
                      <input
                        type="file"
                        name="file-input"
                        id="file-input"
                        className=" sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </label>
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className={` font-semibold w-full text-center text-lg bg-green-400 p-3 rounded-md`}
                >
                  Submit
                </button>
              </div>
              <div className="flex items-center justify-end">
                <p>Don't have an account ?</p>
                <Link
                  to="/sign-in"
                  className="ml-4 font-semibold text-green-400 text-lg"
                >
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
