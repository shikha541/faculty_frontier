import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import './facultyworkload.css';
const Award = () => {
    const [formData, setFormData] = useState({
     name:'',year:'',venue:'',organization:'',for:'',proof:'',detail:''
    });
      const [editorData, setEditorData] = useState("");
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
          <h3>Awards & Honors</h3>
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
              <th>Awarded Name </th>
              <th>Awarded for</th>
              <th>Awarded Organization</th>
              <th>Awarded Year</th>
              <th>Award Details</th>
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
                  <td>{entry.for}</td>
                  <td >{entry.organization}</td>
                  <td>{entry.year}</td>
                  <td>{entry.details}</td>
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
                <label>Awarded Name:<span classname='required'>*</span></label>
                <input
                  type="text"
                  name="name"
                  placeholder='Enter Awarded name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
    
              </div>
              <div className="form-row">
                <label>Awarded Year:<span className="required">*</span></label>
                <input
                  type="number"
                  name="year"
                  placeholder='YYYY'
                  value={formData.year}
                  onChange={handleChange}
                  required
                />
    
              </div>
              <div className="form-row">
                <label>Awarded Organization:</label>
               <textarea name='organization' type='text' value={formData.organization} onChange={handleChange} placeholder='Enter awarded organization' ></textarea>
          </div>
          <div className="form-row">
                <label>Venue: </label>
               <textarea name='venue' type='text' value={formData.venue} onChange={handleChange} placeholder='Enter venue'></textarea>
          </div>
          <div className="form-row">
                <label>Awarded for: <span className="required">*</span></label>
               <textarea name='for' type='text' value={formData.for} onChange={handleChange} placeholder='Enter awarded for' required></textarea>
          </div>
          <div className="form-row">
                <label>Any other detail about award:</label>
               <textarea name='deatils' type='text' value={formData.details} onChange={handleChange} placeholder='Enter other details' ></textarea>
          </div>
              
              <div className="form-row">
                <label>Proof:</label>
                <input type="file" className="file-input w-full max-w-xs" />
              </div>
              {/* <div className="editor-box">
        <CKEditor
          editor={ClassicEditor}
          data={editorData}
          onChange={(event, editor) => {
            const data = editor.getData();
            setEditorData(data);
          }}
          config={{
            toolbar: [
              "heading", "|",
              "bold", "italic", "link", "bulletedList", "numberedList", "blockQuote",
              "|", "insertTable", "uploadImage", "mediaEmbed",
              "|", "undo", "redo"
            ]
          }}
        />
      </div>
      <p>Content:</p>
      <div>{editorData}</div>
            </div> */}
  </div>
          <div className="button-section">
              <button type="submit">Save</button>
              <button type="submit">Reset</button>
          <button type="submit">Cancel</button>
            </div>
            
            </form></div>
      
      );
};
export default Award;