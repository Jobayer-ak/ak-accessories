import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import BusinessSummary from "./Pages/Shared/BusinessSummary";
import Blogs from "./Pages/Blogs/Blogs";
import Reviews from "./Pages/Shared/Reviews";
import Parts from "./Pages/Home/Parts";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/parts" element={<Parts></Parts>}></Route>
        <Route
          path="/businessSummary"
          element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
