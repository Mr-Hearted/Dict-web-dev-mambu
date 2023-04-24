import './App.css';
import Nabvar from './Navbar';
import Dashboard from "./pages/Dashboard"
import AddWebinar from "./pages/AddWebinar"
import WebinarList from "./pages/WebinarList"
import ParticipantManagement from "./pages/ParticipantManagement"
import  {Route, Routes} from "react-router-dom"
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <><Nabvar />
    <div className="container">
      <Routes>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-webinar" element={<AddWebinar />} />
        <Route path="/webinar-list" element={<WebinarList />} />
        <Route path="/participant-management" element={<ParticipantManagement />} />
      </Routes>
    </div></>
  );
}
export default App;
