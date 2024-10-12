import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './facultyworkload.css';
const Conference = () => {
    const [formData, setFormData] = useState({
      title:'',type:'select type',organizer:'',participants:'',duration:'',client:"",venue:'',level:'State',co:'',role:"",start:'',end:'',by:''
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
          <h3>Conference/Seminar/Training/Development/Workshop Organised </h3>
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
              <th>Collaboration</th>
              <th>Start Date</th>
              <th>End date</th>
              <th>Sponsered by</th>
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
                  <td >{entry.organizer}</td>
                  <td>{entry.co}</td>
                  <td>{entry.start}</td>
                  <td>{entry.end}</td>
                  <td>{entry.by}</td>
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
                <label>Program Title:<span className="required">*</span></label>
                <input
                  type="text"
                  name="title"
                  placeholder='Enter Title'
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
    
              </div>
              <div className="form-row">
                <label>Duration(H:M):</label>
                <input
                  type="number"
                  placeholder='Enter Hrs.'
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                />
                <input type="number" name="duration" placeholder="Enter Min." value={formData.duration} onChange={handleChange}></input>
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
                  <option value="Workshop">Workshop</option>
                  <option value="Training & Workshop">Training & Workshop</option>
                  <option value="Conference">Conferenece</option>
                  <option value="Training">Trainig</option>
                  <option value='Seminar'>Seminar</option>
                  <option value='Development'>Development</option>
                </select>
              </div>
              <div className="form-row">
                <label>Select Level:<span className="required">*</span></label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                >
                    <option value='State'>State</option>
                  <option value="National">National</option>
                  <option value='International'>International</option>
                  <option value="institute">Institute</option>
                </select>
              </div>
              <div className="form-row">
                <label>Event Organizer: </label>
                <input
                  type="text"
                  name="organizer"
                  placeholder='Enter Event Organizer'
                  value={formData.organizer}
                  onChange={handleChange}
                />
    
              </div>
              <div className="form-row">
                <label>Collaboration: </label>
                <input
                  type="text"
                  name="co"
                  placeholder='Enter collaboration details'
                  value={formData.co}
                  onChange={handleChange}
                />
    
              </div>
              <div className="form-row">
                <label>No. of participants: </label>
                <input
                  type="number"
                  name="participants"
                  placeholder='Enter no. of participants'
                  value={formData.participants}
                  onChange={handleChange}
                />
    
              </div>
              <div className="form-row">
                <label>Your role:<span className="required">*</span></label>
                <input
                  type="text"
                  name="role"
                  placeholder='Enter your role'
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
    
              </div>
              <div className="form-row">
                <label>Venue:</label>
               <textarea name='venue' type='text' value={formData.venue} onChange={handleChange} placeholder='Enter venue' ></textarea>
          </div>
          <div className="form-row">
                <label>Start Date:<span className="required">*</span></label>
                <input
                  type="number"
                  name="start"
                  placeholder='DD'
                  value={formData.start}
                  onChange={handleChange}
                  required
                />
    
              </div>
              <div className="form-row">
                <label>End Date:<span className="required">*</span></label>
                <input
                  type="number"
                  name="end"
                  placeholder='DD'
                  value={formData.end}
                  onChange={handleChange}
                  required
                />
    
              </div>
          <div className="form-row">
                <label>Venue:</label>
               <textarea name='venue' type='text' value={formData.venue} onChange={handleChange} placeholder='Enter venue' ></textarea>
          </div>
          <div className="form-row">
                <label>Sponsered by:</label>
               <textarea name='by' type='text' value={formData.by} onChange={handleChange} placeholder='Sponsered by' ></textarea>
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
export default  Conference;