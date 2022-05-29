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
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Login/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import RequireAdmin from "./Pages/Login/RequireAdmin";
// import Users from "./Pages/Dashboard/Users";
import AddParts from "./Pages/Dashboard/AddParts";
import ManageParts from "./Pages/Dashboard/ManageParts";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import AllUser from "./Pages/Dashboard/AllUser";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import Users from "./Pages/Dashboard/Users";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/parts/" element={<Parts></Parts>}></Route>
        <Route
          path="/businessSummary"
          element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        {/* <Route path="/reviews" element={<Reviews></Reviews>}></Route> */}
        <Route
          path="/purchase/:partsId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }></Route>
          <Route
            path="addParts"
            element={
              <RequireAdmin>
                <AddParts></AddParts>
              </RequireAdmin>
            }></Route>
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }></Route>

          <Route
            path="manageParts"
            element={
              <RequireAdmin>
                <ManageParts></ManageParts>
              </RequireAdmin>
            }></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
