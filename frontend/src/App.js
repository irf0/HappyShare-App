import Home from "./Container/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import UserProfile from "./Components/UserProfile";
import Feed from "./Components/Feed";
import PinDetail from "./Components/PinDetail";
import CreatePin from "./Components/CreatePin";
import Search from "./Components/Search";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/search" element={<Search />} />
        <Route
          exact
          path="/category/:categoryName"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
        />
        <Route exact path="/pin-detail/:pinId" element={<PinDetail />} />
        <Route exact path="/create-pin" element={<CreatePin />} />
        <Route
          exact
          path="/user-profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
