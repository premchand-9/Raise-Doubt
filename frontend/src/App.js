import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import Registration from "./Components/Registration";
import AdminDashboard from "./Components/Assistants/Dashboard";
import UserDashboard from "./Components/Users/Dashboard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/assistant/dashboard"
            element={<AdminDashboard value="Home" />}
          ></Route>
          <Route
            path="/assistant/raise-a-doubt"
            element={<AdminDashboard value="Raise" />}
          ></Route>
          <Route
            path="/assistant/solve-doubts"
            element={<AdminDashboard value="Solve" />}
          ></Route>
          <Route
            path="/student/dashboard"
            element={<UserDashboard value="Home" />}
          ></Route>
          <Route
            path="/student/raise-a-doubt"
            element={<UserDashboard value="Raise" />}
          ></Route>
          <Route
            path="/student/solve-doubts"
            element={<UserDashboard value="Solve" />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
