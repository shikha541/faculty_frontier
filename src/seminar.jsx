import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './facultyworkload.css';
const Seminar = () => {
    const [formData, setFormData] = useState({
      title:'',type:'select type',level:'state',event:'',start:'',end:'',code:'',venue:"",invited:'invited',role:'Select Role'
    });
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
          <h3>Seminar/Training/Development/Workshop Attended</h3>
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
              <th>Program Title </th>
              <th>Level</th>
              <th>Event Organizer</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Your Role</th>
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
                  <td>{entry.level}</td>
                  <td >{entry.event}</td>
                  <td>{entry.start}</td>
                  <td>{entry.end}</td>
                  <td>{entry.role}</td>
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
                    <label>Program Title:<span className='required'>*</span></label>
                    <input type="text" name='title' placeholder="Program Title" value={formData.title} onChange={handleChange}></input>
                </div>
            <div className="form-row">
                <label>Select Level:<span className="required">*</span></label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                >
                    <option value='state'>State</option>
                  <option value="national">National</option>
                  <option value="international">International</option>
                  <option value="institute">Institute</option>
                </select>
              </div>
              <div className="form-row">
                <label>Your Role:<span className="required">*</span></label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                    <option value='select role'>Select Role</option>
                  <option value="Resource Person">Resource Person</option>
                  <option value="Participant">Participant</option>
                 <option value="Author">Author</option>
                  <option value="others">Other</option>
                </select>
              </div>
              <div className="form-row">
                <label>Type:<span className="required">*</span></label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                    <option value='select type'>Select Type</option>
                  <option value="workshop">Workshop</option>
                  <option value="training & workshop">Training & Workshop</option>
                  <option value="training">Training</option>
                  <option value="seminar">Seminar</option>
                  <option value="development">Development</option>
                </select>
              </div>
              <div className="form-row">
                <label>Invited/Deputed:<span className="required">*</span></label>
                <select
                  name="invited"
                  value={formData.invited}
                  onChange={handleChange}
                  required
                >
                    <option value='invited'>Invited</option>
                  <option value="deputed">Deputed</option>
                </select>
              </div>
             
              
              
              <div className="form-row">
                <label>Event Organizer:</label>
                <input
                  type="text"
                  name="event"
                  placeholder='Enter event organizer'
                  value={formData.event}
                  onChange={handleChange}
                />
    
              </div>
              <div className="form-row">
                <label>Venue:</label>
               <textarea name='venue' type='text' value={formData.venue} onChange={handleChange} placeholder='Enter Venue' ></textarea>
          </div>
              <div className="form-row">
                <label>Start date:<span className='required'>*</span></label>
                <input
                  type="number"
                  name="start"
                  placeholder='DD'
                  value={formData.start}
                  onChange={handleChange}
                />
    
              </div>
              <div className="form-row">
                <label>End date:<span className='required'>*</span></label>
                <input
                  type="number"
                  name="end"
                  placeholder='DD'
                  value={formData.end}
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
export default  Seminar;