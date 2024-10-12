import React, { useState } from 'react';
import './facultyworkload.css'; // Import the CSS file

const SponseredProjects = () => {
  const [formData, setFormData] = useState({
    co:'',
    coo:'',
    project:'',
    status:"On Going",
    year:'',
    duration:'',
    principal:'',
    sponsor:'',
    amount:'',
    team:'',
    fund:'',
    level:'State'
  });
  const [filterType, setFilterType] = useState('Journal');
  const [entries] = useState([]); // assuming data will be fetched and populated here
  const [searchTerm, setSearchTerm] = useState('');
  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data: ', formData);
    // Add your logic here (API call, etc.)
  };

  return (
    <div className="profile-form-container">
      <form onSubmit={handleSubmit}>
      <h3>Sponsored Projects</h3>
      <div className='table-container'>
      <div className="filter-section">
      <label>Show entries: </label>
        <input type="number" defaultValue={20} min={1} />

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
</div>
        <table className="table">
          <thead>
            <tr>
              <th>SI No.</th>
              <th>Project Title</th>
              <th>Principal Investigator</th>
              <th>Co-investigator(s)</th>
              <th>Sponsoring Organization</th>
              <th>Collaborating Organization</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Upload</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {entries.length > 0 ? (
              entries.filter(entry => entry.title.includes(searchTerm)).map((entry, index) => (
                <tr key={index}>
                  <td>{entry.si}</td>
                  <td>{entry.project}</td>
                  <td>{entry.principal}</td>
                  <td>{entry.co}</td>
                  <td>{entry.sponsor}</td>
                  <td>{entry.coo}</td>
                  <td>{entry.duration}</td>
                  <td>{entry.status}</td>
                  <td><button>Upload</button></td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="14">No Data to Display</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pagination">
        <span>Showing 1 to 1 of 1 entries</span>
        <button>Previous</button>
        <button>Next</button>
      </div>
      </div>
        <div className="form-grid">
          
        <div className="form-row">
            <label>Project Title:<span className="required">*</span></label>
            <input
              type="text"
              name="project"
              placeholder='Enter Project Title'
              value={formData.project}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Year of sanction: <span className="required">*</span></label>
            <input
              type="date"
              name="year"
              placeholder='select year'
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Duration(in months): <span className="required">*</span></label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder='Enter the duration in months'
              required
            />

          </div>
          <div className="form-row">
            <label>Team members: <span className="required">*</span></label>
            <input
              type="number"
              name="team"
              placeholder='Ente team members'
              value={formData.team}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-row">
            <label>Status: <span className="required">*</span></label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="on">On Going</option>
              <option value="complete">Completed</option>
              <option value="start">Start</option>
            </select>
          </div>
          <div className="form-row">
            <label>Level: <span className="required">*</span></label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
            >
              <option value="state">State</option>
              <option value="national">National</option>
              <option value="inter">International</option>
            </select>
          </div>
          <div className="form-row">
            <label>Principal Investigator:
            <span className="required">*</span>
            </label>
            <input
              type="text"
              name="principal"
              placeholder='enter principal investigator'
              value={formData.principal}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-row">
            <label>Sponsoring Organization:</label>
            <textarea type='text' name='sponsor'  placeholder='Enter Sponsoring Organization' value={formData.sponsor} onChange={handleChange}></textarea>
          </div>
          <div className="form-row">
            <label>Co-Investigator:</label>
            <textarea type='text' name='co'  placeholder='Enter Co-Principal Investigator' value={formData.co} onChange={handleChange}></textarea>
          </div>
          <div className="form-row">
            <label>Amount (in ₹):</label>
            <input
              type="number"
              name="amount"
              placeholder='enter amount'
              value={formData.amount}
              onChange={handleChange}
  
            />
          </div>
          <div className="form-row">
            <label>Collaborating-Organization:</label>
            <textarea type='text' name='coo'  placeholder='Enter Collaborating organization' value={formData.coo} onChange={handleChange}></textarea>
          </div>
          <div className="form-row">
            <label>Funding agency:</label>
            <input
              type="text"
              name="fund"
              placeholder='enter the funding agency'
              value={formData.fund}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
                <label>Proof:</label>
                <input type="file" className="file-input w-full max-w-xs" />
              </div>

        
        </div>
        <div className="button-section">
              <button type="submit">Save</button>
              <button type="submit">Reset</button>
          <button type="submit">Cancel</button>
            </div>

      
      </form></div>
  );
};

export default SponseredProjects;
