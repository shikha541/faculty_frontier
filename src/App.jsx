import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './sidebar';
import FacultyProfile from './facultyprofile';
import Facultyworkload from './facultyworkload';
import Research from './research';
import ResearchProjects from './researchp';
import PatentInnovation from './patent';
import Consultancy from './consultancy';
import Award from './award';
import SponseredProjects from './sponsered';
import Fellowship from './fellowship';
import Conference from './conference';
import Seminar from './seminar';
import Professional from './professional';
import BookChapter from './bookchapter';
import Bookpublished from './bookpublished';
// import LoginPage from './login';
import './App.css';

function App() {
  // Track login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login success
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        {/* Conditionally render based on login state */}
        {/* {isLoggedIn ? (*/}
          <> 
            <Header />
            <Navbar />
            
            <div className="content">
            <Sidebar />
              <Routes>
                <Route path="/facultyprofile" element={<FacultyProfile />} />
                <Route path="/facultyworkload" element={<Facultyworkload />} />
                <Route path='/research' element={<Research />} />
                <Route path='/sponsered' element={<SponseredProjects />} />
                <Route path='/patent' element={<PatentInnovation />} />
                <Route path='/consultancy' element={<Consultancy />} />
                <Route path='/award' element={<Award />} />
                <Route path='/bookpublished' element={<Bookpublished />} />
                <Route path='/bookchapter' element={<BookChapter />} />
                <Route path='/fellowship' element={<Fellowship />} />
                <Route path='/conference' element={<Conference />} />
                <Route path='/seminar' element={<Seminar />} />
                <Route path='/researchp' element={<ResearchProjects />} />
                <Route path='/professional' element={<Professional />} />
                {/* Default route after login */}
                <Route path="/" element={<Navigate to="/facultyprofile" />} />
              </Routes>
            </div>
            <Footer />
          </>
        {/* ) : (
          // Show Login Page when user is not logged in
          <LoginPage onLogin={handleLogin} />
        )} */}
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className='header bg-base-100'>
      <h1>Guru Nanak Dev Engineering College, Ludhiana</h1>
      <h2>Department of Computer Science and Engineering</h2>
    </header>
  );
}

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <ul className="navbar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Curriculum</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Assessment</a></li>
        <li><a href="#">Attainment</a></li>
        <li><a href="#">Survey</a></li>
        <li><a href="#">Faculty Contribution</a></li>
        <li><a href="#">Utilities</a></li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer bg-base-200">
      <p>GNDEC© 2017 Computer Science and Engineering</p>
    </footer>
  );
}

export default App;
