import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './facultyworkload.css';
const Consultancy= () => {
    const [formData, setFormData] = useState({
      title:'',year:'',status:'Ongoing',proof:"",commencement:'',code:'',client:"",revenue:'',role:'Select Role',co:''
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
    const handleFilterChange = (e) => {
      setFilterType(e.target.value);
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
          <h3>Consultancy and testing projects</h3>
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
            <th>Sr No.</th>
              <th>Project Title </th>
              <th>Project Code</th>
              <th>Client</th>
              <th>Your Role</th>
              <th>Commencement Year</th>
              <th>Completion Year</th>
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
                  <td>{entry.Sr}</td>
                  <td>{entry.title}</td>
                  <td>{entry.code}</td>
                  <td >{entry.client}</td>
                  <td>{entry.role}</td>
                  <td>{entry.commencemnet}</td>
                  <td>{entry.year}</td>
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

      {/* Pagination */}
      
            <div className="form-grid">
              <div className="form-row">
                <label>Project Title: <span className="required">*</span></label>
               <textarea name='title' type='text' value={formData.title} onChange={handleChange} placeholder='Enter project title' required></textarea>
          </div>
              <div className="form-row">
                <label>Commencement Year:<span className="required">*</span></label>
                <input
                  type="number"
                  name="commencement"
                  placeholder='YYYY'
                  value={formData.commencement}
                  onChange={handleChange}
                  required
                />
    
              </div>
              <div className="form-row">
                <label>Completion Year:</label>
                <input
                  type="number"
                  placeholder='YYYY'
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                />
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
                <label>Client:</label>
               <textarea name='client' type='text' value={formData.client} onChange={handleChange} placeholder='Enter Client`s name' ></textarea>
          </div>
              <div className="form-row">
                <label>Revenue earned(in ₹):</label>
                <input
                  type="number"
                  name="revenue"
                  placeholder='Enter the amount'
                  value={formData.revenue}
                  onChange={handleChange}
                />
    
              </div>
              
              <div className="form-row">
                <label>Your Role: <span className="required">*</span></label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                    <option value='select role'>Select Role</option>
                  <option value="consultant">Consultant</option>
                  <option value="co-consultant">Co-Consultant</option>
                  <option value="others">Others</option>
                </select>
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
                <label>Co-consultant(s):</label>
               <textarea name='co' type='text' value={formData.co} onChange={handleChange} placeholder='Enter Co-consultant`s name' ></textarea>
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
export default  Consultancy;