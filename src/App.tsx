import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, SignUp, PasswordReset, NewPasswordReset } from "./Routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/new-password-reset" element={<NewPasswordReset />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};
export default App;
