import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Login,
  SignUp,
  PasswordReset,
  NewPasswordReset,
  ActivationActivationPage,
} from "./Routes";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { Store } from "./radux/store/store";
import { loadUser } from "./radux/action/user";

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationActivationPage />}
        />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/new-password-reset" element={<NewPasswordReset />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};
export default App;
