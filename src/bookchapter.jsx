import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './facultyworkload.css';
const BookChapter = () => {
    const [formData, setFormData] = useState({
      title:'',chapter:'',proof:"",author:"",isbn:'',editor:''
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
          <h3>Book Chapter</h3>
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
              <th>Book Title </th>
              <th>Chapter Title</th>
              <th>Author(s)</th>
              <th>Editor</th>
              <th>ISBN</th>
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
                  <td>{entry.chapter}</td>
                  <td >{entry.author}</td>
                  <td>{entry.editor}</td>
                  <td>{entry.isbn}</td>
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
                <label>Book Title:<span className="required">*</span></label>
                <input
                  type="text"
                  name="title"
                  placeholder='Enter Book Title'
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
    
              </div>
              <div className="form-row">
                <label>Chapter title:<span className="required">*</span></label>
                <input
                  type="text"
                  placeholder='Enter chapter title'
                  name="chapter"
                  value={formData.chapter}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Author(s): </label>
                <input
                  type="tex"
                  name="author"
                  placeholder='Enter author(s)'
                  value={formData.author}
                  onChange={handleChange}
                />
    
              </div>
              <div className="form-row">
                <label>Editor:</label>
               <textarea name='editor' type='text' value={formData.editor} onChange={handleChange} placeholder='Enter editor details' ></textarea>
          </div>
              <div className="form-row">
                <label>ISBN:</label>
                <input
                  type="number"
                  name="isbn"
                  placeholder='International Standard Book Number'
                  value={formData.isbn}
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
export default  BookChapter;