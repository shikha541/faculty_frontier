import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './facultyworkload.css';
const PatentInnovation = () => {
    const [formData, setFormData] = useState({
      title:'',year:'',status:'Submitted',patentno:'',proof:""
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
          <h3>Patent And Innovations</h3>
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
            <th>Srno.</th>
              <th>Title </th>
              <th>Patent no.</th>
              <th>Year</th>
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
                  <td>{entry.patentno}</td>
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
                <label>Title: <span className="required">*</span></label>
                <input
                  type="text"
                  name="title"
                  placeholder='Enter the title'
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
          </div>
              <div className="form-row">
                <label>Patent no.: <span className="required">*</span></label>
                <input
                  type="number"
                  name="patentno"
                  placeholder='Enter Patent no.'
                  value={formData.patentno}
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
                  <option value="published">Published</option>
                  <option value="granted">Granted</option>
                </select>
              </div>
    
              <div className="form-row">
                <label>Year:</label>
                <input
                  type="number"
                  placeholder='Enter year'
                  name="year"
                  value={formData.year}
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
export default  PatentInnovation;