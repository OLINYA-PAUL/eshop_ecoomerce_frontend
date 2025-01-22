import React, { useState } from "react";
import styles from "../styles/styles";

const Login = () => {
  const [form, setForm] = useState({});

  const handleForm = ({ name, value }: { name: string; value: string }) => {
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="min-h-screen flex text-white  bg-secondary  flex-col items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <h2 className="text-3xl font-extrabold text-center">
          Login Your Account
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md ">
          <div className="bg-primary py-8 px-8 sm:px-10">
            <form className="space-y-6">
              <label htmlFor="email" className="font-medium text-white text-sm">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  required
                  name="email"
                  autoComplete="email"
                  onChange={(e) =>
                    handleForm({ name: "email", value: e.target.value })
                  }
                  className={`${styles.input} `}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
