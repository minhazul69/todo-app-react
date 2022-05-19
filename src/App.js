import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Shared/Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Todo from "./Todo/Todo";
import Login from "./Form/Login/Login";
import SignUp from "./Form/SignUp/SignUp";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/todo"
          element={
            <RequireAuth>
              <Todo />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
