import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  //hooks
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-500">
            Welcome To Your Dashboard
          </h2>
        </div> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {user && (
            <>
              <li>
                <Link to="/dashboard/orders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addreview">Add A Review</Link>
              </li>
              <li>
                <Link to="/dashboard/myprofile">My Profile</Link>
              </li>
              <li>
                {admin && (
                  <>
                    <Link to="/dashboard/users">Make Admin</Link>
                    <Link to="/dashboard/manageOrders">Manage All Orders</Link>
                    <Link to="/dashboard/addParts">Add A Product</Link>
                    <Link to="/dashboard/manageParts">Manage Products</Link>
                  </>
                )}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
