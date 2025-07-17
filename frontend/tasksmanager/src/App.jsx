import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Admin/Dashboard";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";
import UserDashboard from "./pages/User/UserDashboard";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";
import MyTasks from "./pages/User/MyTasks";

// Main App component
 
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>

          {/* Routes of Admin */}

          <Route element={<PrivateRoute allowedRoles={["admin"]}/>}>
/          <Route path="/admin/dashboard" element={<Dashboard/>}/>
/          <Route path="/admin/tasks" element={<ManageTasks/>}/>
/          <Route path="/admin/create-task" element={<CreateTask/>}/>
/          <Route path="/admin/users" element={<ManageUsers/>}/>
           </Route>


           {/* Routes of Users */}
          <Route element={<PrivateRoute allowedRoles={["admin"]}/>}>
/          <Route path="/user/dashboard" element={<UserDashboard/>}/>
/          <Route path="/user/tasks" element={<MyTasks/>}/>
/          <Route path="/user/task-details/:id" element={<ViewTaskDetails/>}/>
           </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
