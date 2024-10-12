import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './facultyworkload.css';
const Research = () => {
    const [formData, setFormData] = useState({
      author: "",
      title: "",
      jounral: '',
      level: "State",
      volume: "",
      issue: "",
      DOI: "",
      month: "",
      year: "",
      SCI: '',
      sjr: "",
      start: "",
      end: '',
      proof:'',
      issn:'',
      page:'',
      hindex:'',
      i10:'',
      url:'',
      snip:'',
      conference:'',
      event:'',
      publisher:'',
      impact:'',
      abstract:''
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
          <h3>Research Publications</h3>
          <form onSubmit={handleSubmit}>
        

      {/* Table */}
      <div className="table-container">
      <div className="filter-section">
        <label>Filter Type by: </label>
        <select value={filterType} onChange={handleFilterChange}>
          <option value="Journal">Journal</option>
          <option value="Conference">Conference</option>
        </select>

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
              <th>Title of Paper</th>
              <th>Author(s)</th>
              <th>Page No.</th>
              <th>Publication / Journal Title</th>
              <th>Publication Year</th>
              <th>Publisher</th>
              <th>Volume No.</th>
              <th>ISSN / ISBN</th>
              <th>Scopus / SCI / Peer Reviewed</th>
              <th>DOI</th>
              <th>Impact Factor</th>
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
                  <td>{entry.authors}</td>
                  <td>{entry.pageNo}</td>
                  <td>{entry.journalTitle}</td>
                  <td>{entry.publicationYear}</td>
                  <td>{entry.publisher}</td>
                  <td>{entry.volume}</td>
                  <td>{entry.issn}</td>
                  <td>{entry.scopus}</td>
                  <td>{entry.doi}</td>
                  <td>{entry.impactFactor}</td>
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
                <label>Title of paper: <span className="required">*</span></label>
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
                <label>Publication/Jounral Name: <span className="required">*</span></label>
                <input
                  type="text"
                  name="jounral"
                  placeholder='Enter Publication/journal type'
                  value={formData.jounral}
                  onChange={handleChange}
                />
    
              </div>
              <div className="form-row">
                <label>Author(s):</label>
                <textarea type='text' name='author'  value={formData.author} onChange={handleChange}></textarea>
              </div>
    
              <div className="form-row">
                <label>Level of publication: <span className="required">*</span></label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                >
                  <option value="state">State</option>
                  <option value="National">National</option>
                  <option value="inter">International</option>
                </select>
              </div>
    
              <div className="form-row">
                <label>Volume No.:</label>
                <input
                  type="number"
                  placeholder='Enter volume no.'
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Page no.:</label>
                <input
                  type="number"
                  name="page"
                  placeholder='Enter the page no.'
                  value={formData.page}
                  onChange={handleChange}
                />
              </div>
    
              <div className="form-row">
                <label>ISSN/ISBN:</label>
                <input
                  type="number"
                  placeholder='International Standard Serial Number '
                  name="issn"
                  value={formData.issue}
                  onChange={handleChange}
                />
                
              </div>
              
              <div className="form-row">
                <label>Issue:</label>
                <input
                  type="number"
                  placeholder='Enter issue number '
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                />
                
              </div>
              <div className="form-row">
                <label>h-index:</label>
                <input
                  type="number"
                  name="hindex"
                  placeholder='Enter h-index'
                  value={formData.hindex}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>i10-index:</label>
                <input
                  type="number"
                  name="i10"
                  value={formData.i10}
                  placeholder='Enter i10-index'
                  onChange={handleChange}
                />
              </div>
    
              <div className="form-row">
                <label>DOI:</label>
                <input
                  type="number"
                  name="DOI"
                  placeholder='Enter Digital Object Identifier'
                  value={formData.DOI}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Published URL:</label>
                <input
                  type="number"
                  name="url"
                  placeholder='Enter published URL'
                  value={formData.url}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Month of publication:</label>
               <input
               type="text"
               placeholder="january"
               name='month'
               value={formData.month}></input>
              </div>
              <div className="form-row">
                <label>Year of publication:</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Scopus/SCI/Peer reviewed:</label>
                <input
                  type="number"
                  name="review"
                  placeholder='Enter scopus/sci/peer reviewed'
                  value={formData.review}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>SJR index:</label>
                <input
                  type="number"
                  name="sjr"
                  placeholder='Enter Scientific Journal Rankings Index'
                  value={formData.sjr}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>SNIP:</label>
                <input
                  type="number"
                  name="snip"
                  placeholder='Enter Source Normalized Impact per P'
                  value={formData.snip}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Impact Factor:</label>
                <textarea type='text' name='impact' placeholder='Enter impact factor' value={formData.impact} onChange={handleChange}></textarea>
              </div>
              <div className="form-row">
                <label>Publisher:</label>
                <textarea type='text' name='publisher'  placeholder="Enter Publisher"value={formData.publisher} onChange={handleChange}></textarea>
              </div>
              <div className="form-row">
                <label>Start date:</label>
                <input
                  type="date"
                  name="start"
                  value={formData.start}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>End date:</label>
                <input
                  type="date"
                  name="end"
                  value={formData.end}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Name of the Conference:</label>
                <input
                  type="text"
                  name="conference"
                  placeholder='Enter name of the conference'
                  value={formData.conference}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Name of the Event Organizer:</label>
                <input
                  type="text"
                  name="event"
                  placeholder='Enter name of the event organizer'
                  value={formData.event}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="form-row">
            <label>Abstract:</label>
            <Editor
              apiKey="your-tinymce-api-key"  // Optional if using the cloud version
              initialValue="<p>Write the abstract here...</p>"
              init={{
                height: 200,
                menubar: true,
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
              }}
              value={formData.abstract}
              onEditorChange={handleEditorChange}
            />
          </div> */}
              <div className="form-row">
                <label>Proof:</label>
                <input type="file" className="file-input w-full max-w-xs" />
              </div>
              <div className='form-row'>
  <label className="label cursor-pointer">
    <span className="label-text">Any award it has won: </span>
    <input type="checkbox"  className="checkbox" />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Institutional affiliation(if yes, check):</span>
    <input type="checkbox"  className="checkbox" />
  </label>
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
export default  Research;