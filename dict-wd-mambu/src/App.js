import './App.css';
import Nabvar from './Navbar';
import Dashboard from "./pages/Dashboard"
import AddWebinar from "./pages/AddWebinar"
import WebinarList from "./pages/WebinarList"
import ParticipantManagement from "./pages/ParticipantManagement"
import LoginPage from "./pages/LoginPage";
import { Route, Routes, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = false; // check if user is logged in

    // If not logged in, redirect to login page
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      setLoggedIn(true);
    }
  }, []);

  if (!loggedIn) {
    return <LoginPage />;
  }

  return (
    <>
      <Nabvar />
      <div className="container">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-webinar" element={<AddWebinar />} />
          <Route path="/webinar-list" element={<WebinarList />} />
          <Route path="/participant-management" element={<ParticipantManagement />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
