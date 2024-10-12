import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './facultyworkload.css';
const Professional = () => {
    const [formData, setFormData] = useState({
      name:'',type:'Life Time',no:'',date:''
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
          <h3>Professional Bodies</h3>
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
              <th>Organization Name </th>
              <th>Membership No.</th>
              <th>Date</th>
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
                  <td>{entry.name}</td>
                  <td>{entry.no}</td>
                  <td >{entry.date}</td>
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
                <label>Organizational Name:<span className="required">*</span></label>
                <input
                  type="text"
                  name="name"
                  placeholder='Enter Organizational Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
    
              </div>
            
              <div className="form-row">
                <label>Membership Type: <span className="required">*</span></label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                    <option value='Life Time'>Life Time</option>
                  <option value="annual">Annual</option>
                </select>
              </div>
              <div className="form-row">
                <label>Membership No.:</label>
                <input
                  type="number"
                  name='no'
                  placeholder='Enter membership no.'
                  value={formData.no}
                  onChange={handleChange}
                />
    
              </div> <div className="form-row">
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  placeholder='Enter start date'
                  value={formData.date}
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
export default  Professional;