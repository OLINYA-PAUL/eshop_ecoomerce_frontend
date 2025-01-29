import React, { useState } from "react";
import styles from "../styles/styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../axiosbaseUrl/axios";
import { FiLoader } from "react-icons/fi";

const PasswordReset = () => {
  const [form, setForm] = useState({
    email: "",
  });
  const [isError, setisError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleForm = ({ name, value }: { name: string; value: string }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSummitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email } = form;

    setIsLoading(true);

    try {
      await axiosInstance
        .post("/user/request-password-reset", { email })
        .then((data) => {
          console.log(data.data);

          toast.success(data.data.message);
          navigate("/new-password-reset");
          setForm({ ...form, email: "" });
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
      console.log(error.response?.data.error);
      toast.error(error.response?.data.error);
    }
  };

  return (
    <div className="min-h-screen flex text-white  bg-secondary  flex-col items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <h2 className="text-3xl font-extrabold text-center">
          Rest Your Account
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md ">
          <div className="bg-primary py-8 px-8 sm:px-10">
            <form className="space-y-6" onSubmit={handleSummitForm}>
              <div>
                <label
                  htmlFor="email"
                  className="font-medium text-white text-sm mb-2"
                >
                  Enter your email:
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
                    "Send Reset Link"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
