import React, { SetStateAction, useRef, useState } from "react";
import styles from "../styles/styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../axiosbaseUrl/axios";
import { FiLoader } from "react-icons/fi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const NewPasswordReset = () => {
  const [form, setForm] = useState({
    OTP: "",
    newPassword: "",
  });
  const [isError, setisError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassWord, setshowPassWoed] = useState(false);

  interface VerifyNumber {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
  }

  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    "0": "",
    "1": "",
    "2": "",
    "3": "",
  });

  const InputRef = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const isDisabled = Object.values(verifyNumber).some((value) => value === "");

  const handleInputChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Allow only numbers or empty values
    setisError(false);

    // Update the verifyNumber state with the value at the specified index
    const updatedVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(updatedVerifyNumber);

    // Combine all values of the OTP fields and update the OTP in the form state
    const otp = Object.values(updatedVerifyNumber).join("");
    setForm({ ...form, OTP: otp });
    console.log("OTP from user", otp); // Check if OTP is being updated correctly

    // Auto-focus next input or previous input
    if (value === "" && index > 0) {
      InputRef[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      InputRef[index + 1]?.current?.focus();
    }
  };

  const navigate = useNavigate();

  const handleForm = ({ name, value }: { name: string; value: string }) => {
    setForm({ ...form, [name]: value });
  };

  const handleverifyHandlePasswordChange = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const verifyActivationCode: any = Object.values(verifyNumber).join("");
    if (verifyActivationCode.length !== 4) {
      setisError(true);
      return;
    }

    const { newPassword, OTP } = form;

    setIsLoading(true);

    try {
      await axiosInstance
        .post("/user/reset-password", { OTP, newPassword })
        .then((data) => {
          console.log(data.data);

          toast.success(data.data.message);
          navigate("/sign-in");
          setForm({ ...form, newPassword: "", OTP: "" });
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
          Enter OPT & new Password
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md ">
          <div className="bg-primary py-8 px-8 sm:px-10">
            <form
              className="space-y-6"
              onSubmit={handleverifyHandlePasswordChange}
            >
              <p className="text-center">
                {isDisabled ? "Input OTP" : "Thanks for adding your OTP"}
              </p>
              <div className="text-center">
                {Object.keys(verifyNumber).map((key: string, index: number) => (
                  <input
                    key={index}
                    ref={InputRef[index]}
                    maxLength={1}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    value={verifyNumber[key as keyof VerifyNumber]}
                    className={`${
                      isError
                        ? "border-2 border-red-600 shake_animation"
                        : "border focus:border-blue-500 border-green-400"
                    } h-[50px] w-[50px] font-Poppins text-black dark:text-white text-[18px] p-2 ml-2 rounded-lg text-center bg-transparent border_colour`}
                  />
                ))}
              </div>
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
                    value={form.newPassword}
                    onChange={(e) =>
                      handleForm({ name: "newPassword", value: e.target.value })
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
                    "Reset Password"
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

export default NewPasswordReset;
