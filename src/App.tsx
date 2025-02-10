import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Login,
  SignUp,
  PasswordReset,
  NewPasswordReset,
  ActivationActivationPage,
  ProductsPage,
  BestSelling,
  Events,
  FAQ,
} from "./Routes";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { Store } from "./radux/store/store";
import { loadUser } from "./radux/action/user";
import { useSelector } from "react-redux";

const App = () => {
  const { loading } = useSelector((state: any) => state.user);
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
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
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/best-selling" element={<BestSelling />} />
            <Route path="/events" element={<Events />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      )}
    </>
  );
};
export default App;
