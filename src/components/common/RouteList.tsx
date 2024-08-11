import { FC, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Dashboard from "../../pages/dashboard/Dashboard";
import Profile from "../../pages/profile/Profile";
import Codes from "../../pages/codes/Codes";
import Settings from "../../pages/settings/Settings";
import Layout from "./Layout";
import Loader from "../ui/loader/Loader";
import Tables from "../../pages/tables/Tables";
import General from "../../pages/settings/general/General";

const RouteList: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/codes" element={<Codes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/general" element={<General />} />
            <Route path="/tables" element={<Tables />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default RouteList;
