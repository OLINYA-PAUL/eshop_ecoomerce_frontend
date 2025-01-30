import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../axiosbaseUrl/axios";
import toast from "react-hot-toast";
import { FiLoader } from "react-icons/fi";

const ActivationPage = () => {
  const { activation_token } = useParams();
  console.log(activation_token);
  const [isError, setisError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const getActivation = async () => {
    setIsLoading(true);
    try {
      await axiosInstance
        .post("/user/activation", { activation_token })
        .then((data) => {
          const message = (data.data.message = "Please login your account");
          console.log(data.data);
          navigate("/sign-in");
          toast.success(message);
          setIsLoading(false);
        })
        .catch((error: any) => {
          console.log(error);
          setisError(true);
          setIsLoading(false);

          return;
        });
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.response?.data.error);
    }
  };

  useEffect(() => {
    getActivation();
  }, [activation_token]);

  return (
    <div className="h-screen w-full flex text-white  bg-secondary justify-center  flex-col items-center py-12 sm:px-6 lg:px-8">
      {isLoading && (
        <div className="sm:mx-auto sm:w-full sm:max-w-md flex items-start justify-center">
          <FiLoader color="white" size={40} className="mr-3" />

          <p className="text-xl text-center">Please wait...</p>
        </div>
      )}

      {!isLoading && !isError ? (
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <h2 className="text-xl  text-center">
            Your Account is Activated succesfully
          </h2>
        </div>
      ) : (
        <>
          {isError && (
            <div className="sm:mx-auto sm:w-full sm:max-w-md ">
              <h2
                className={` ${isError && "text-red-500"} text-xl  text-center`}
              >
                Invalide token provided
              </h2>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ActivationPage;
