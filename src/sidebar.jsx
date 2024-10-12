import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './sidebar.css'; 
function Sidebar() {
  return (
    <ul className='sidebar bg-base-100'>
      <div className='li'>
        <li><Link to="/facultyprofile">Faculty Profile</Link></li>
        <li><Link to="/facultyworkload">Faculty Workload</Link></li>
        <li><Link to="/research">Research Publication</Link></li>
        <li><Link to="/sponsered">Sponsored Projects</Link></li>
        <li><Link to="/patent">Patent & Innovation</Link></li>
        <li><Link to="/consultancy">Consultancy / Testing Projects</Link></li>
        <li><Link to="/award">Award & Honors</Link></li>
        <li><Link to="/bookpublished">Book Published</Link></li>
        <li><Link to="/bookchapter">Book Chapter</Link></li>
        <li><Link to="/fellowship">Fellowship / Scholarship</Link></li>
        <li><Link to="/conference">Conference / Seminar / Training / Development / Workshop Organized</Link></li>
        <li><Link to="/seminar">Seminar / Training / Development / Workshop Attended</Link></li>
        <li><Link to="/researchp">Research Projects</Link></li>
        <li><Link to="/professional">Professional Bodies</Link></li>
      </div>
    </ul>
  );
}

export default Sidebar;
