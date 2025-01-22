import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login } from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
