import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './facultyworkload.css';
const Fellowship = () => {
    const [formData, setFormData] = useState({
      for:'',by:'',start:'',end:'',amount:'',type:"fellowship"  });
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
          <h3>Fellowship/Scholarship</h3>
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
              <th>Fellowship/Scholarship for </th>
              <th>Awarded by</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Type</th>
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
                  <td>{entry.for}</td>
                  <td>{entry.by}</td>
                  <td >{entry.start}</td>
                  <td>{entry.end}</td>
                  <td>{entry.type}</td>
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
                <label>Fellowship/Scholarship for:<span className="required">*</span></label>
                <input
                  type="text"
                  name="for"
                  placeholder='Enter Fellowship/Scholarship for'
                  value={formData.for}
                  onChange={handleChange}
                  required
                />
    
              </div>
              <div className="form-row">
                <label>Awarded by:</label>
               <textarea name='by' type='text' value={formData.by} onChange={handleChange} placeholder='Enter Awarded by '></textarea>
          </div>
             
              <div className="form-row">
                <label>Start date:<span className="required">*</span></label>
                <input
                  type="number"
                  placeholder='DD'
                  name="start"
                  value={formData.start}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>End date:<span className="required">*</span></label>
                <input
                  type="number"
                  placeholder='DD'
                  name="end"
                  value={formData.end}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Amount(in Ruppies): </label>
                <input
                  type="number"
                  name="amount"
                  placeholder='Enter amount'
                  value={formData.amount}
                  onChange={handleChange}
                />
    
              </div>
              <div className="form-row">
                <label>Type: <span className="required">*</span></label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="fellowship">Fellowship</option>
                  <option value="scholarship">Scholarship</option>
                </select>
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
export default  Fellowship;