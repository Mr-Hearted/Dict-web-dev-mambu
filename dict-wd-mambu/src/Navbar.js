import { Link } from 'react-router-dom';

export default function Nabvar() {
    return(
        <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/add-webinar">Add Webinar</Link></li>
        <li><Link to="/webinar-list">Webinar List</Link></li>
        <li><Link to="/participant-management">Participants Management</Link></li>
      </ul>
    </nav>
    )
}