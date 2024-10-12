import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './facultyworkload.css';
const ResearchProjects = () => {
    const [formData, setFormData] = useState({
      title:'',sanctioned:'',status:'Ongoing',proof:"",team:'',code:'',duration:"",amount:'',role:'Principal',co:'',fund:''
    });
    const [filterType, setFilterType] = useState('Journal');
    const [entries] = useState([]); // assuming data will be fetched and populated here
    const [searchTerm, setSearchTerm] = useState('');
    // const handleEditorChange = (content) => {
    //   setFormData({ ...formData, abstract: content });
    // };
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data Submitted: ", formData);
      alert("Form Submitted Successfully!");
    };
    return (
        <div className="profile-form-container">
          <h3>Research Projects</h3>
          <form onSubmit={handleSubmit}>
        

      {/* Table */}
      <div className="table-container">
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
              <th>Project Title </th>
              <th>Role</th>
              <th>Sanctioned Date</th>
              <th>Duration</th>
              <th>Collaboration</th>
              <th>Upload</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {entries.length > 0 ? (
              entries.filter(entry => entry.title.includes(searchTerm)).map((entry, index) => (
                <tr key={index}>
                  <td>{entry.title}</td>
                  <td>{entry.role}</td>
                  <td >{entry.sanctioned}</td>
                  <td>{entry.duration}</td>
                  <td>{entry.collaboration}</td>
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

      {/* Pagination */}
      
            <div className="form-grid">
         
              <div className="form-row">
                <label>Project Title:<span className="required">*</span></label>
                <input
                  type="text"
                  name="title"
                  placeholder='Enter project title'
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
    
              </div>
              <div className="form-row">
                <label>Sanctioned Date:</label>
                <input
                  type="date"
                  placeholder='dd-mm-yyyy'
                  name="sanctioned"
                  value={formData.sanctioned}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Role: <span className="required">*</span></label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value='Principal'>Pricipal Investigator</option>
                  <option value="investigator">Co-Investigator</option>
                </select>
              </div>
              <div className="form-row">
                <label>Project Code: </label>
                <input
                  type="number"
                  name="code"
                  placeholder='Enter project code'
                  value={formData.code}
                  onChange={handleChange}
                />
    
              </div>
              <div className="form-row">
                <label>Team Member(s):</label>
               <textarea name='team' type='text' value={formData.team} onChange={handleChange} placeholder='Enter team members' ></textarea>
          </div>
              <div className="form-row">
                <label>Quantum of Amount Sanctioned(in ₹):</label>
                <input
                  type="number"
                  name="amount"
                  placeholder='Enter the amount'
                  value={formData.amount}
                  onChange={handleChange}
                />
    
              </div>
              <div className="form-row">
                <label>Duration(in months):</label>
                <input
                  type="number"
                  name="duartion"
                  placeholder='Enter Duration'
                  value={formData.duration}
                  onChange={handleChange}
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
                  <option value="submitted">Submitted</option>
                  <option value="Ongoing">On Going</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
    
            
              <div className="form-row">
                <label>Funding Agency:</label>
               <textarea name='fund' type='text' value={formData.fund} onChange={handleChange} placeholder='Enter Co-Funding Agency' ></textarea>
          </div>
          <div className="form-row">
                <label>Collaboration:</label>
               <textarea name='co' type='text' value={formData.co} onChange={handleChange} placeholder='Enter collaboration' ></textarea>
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
export default  ResearchProjects;