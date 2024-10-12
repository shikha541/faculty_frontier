import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './facultyworkload.css';
const Bookpublished = () => {
    const [formData, setFormData] = useState({
      title:'',year:'',proof:"",co:'',isbn:'',author:'select user',published:'',publisher:'',language:'',type:'',copy:'',chapters:'',book:''
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
          <h3>Book Published</h3>
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
            <th>Book Title</th>
              <th>Author</th>
              <th>Co-author(s)</th>
              <th>ISBN</th>
              <th>Language(s)</th>
              <th>Publisher</th>
              <th>Published Year</th>
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
                  <td>{entry.author}</td>
                  <td>{entry.co}</td>
                  <td >{entry.isbn}</td>
                  <td>{entry.language}</td>
                  <td>{entry.publisher}</td>
                  <td>{entry.year}</td>
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
                <label>Book Title: <span className="required">*</span></label>
               <textarea name='title' type='text' value={formData.title} onChange={handleChange} placeholder='Enter book title' required></textarea>
          </div>
          <div className="form-row">
                <label>Type: <span className="required">*</span></label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                    <option value='text book'>Text Book</option>
                  <option value="reference book">Reference Book</option>
                
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-row">
                <label>Published year:<span className="required">*</span></label>
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
                <label>ISBN:</label>
                <input
                  type="number"
                  placeholder='International Standard Book No.'
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Book No.: </label>
                <input
                  type="number"
                  name="book"
                  placeholder='Enter book no.'
                  value={formData.book}
                  onChange={handleChange}
                />
    
              </div>
              <div className="form-row">
                <label>Language(s):</label>
               <textarea name='language' type='text' value={formData.language} onChange={handleChange} placeholder='Enter language(s)' ></textarea>
          </div>
              <div className="form-row">
                <label>Copyright Year:</label>
                <input
                  type="number"
                  name="copy"
                  placeholder='YYYY'
                  value={formData.copy}
                  onChange={handleChange}
                />
    
              </div>
              <div className="form-row">
                <label>Published in:</label>
               <textarea name='published' type='text' value={formData.published} onChange={handleChange} placeholder='Enter Published in' ></textarea>
          </div>
          <div className="form-row">
                <label>No. Of Chapters:</label>
                <input
                  type="number"
                  name="chapters"
                  placeholder='Enter No. of Chapters'
                  value={formData.chapters}
                  onChange={handleChange}
                />
    
              </div>
              
              <div className="form-row">
                <label>Author:</label>
                <select
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                >
                    <option value='select user'>Select User</option>
                  <option value="Dr. Parminder Singh">Dr. Parminder Singh</option>
                  <option value="Dr. Amandeep Sohal">Dr. Amandeep Sohal</option>
                  <option value="Prof. Diana Nagpal">Prof. Diana Nagpal</option>
                  <option value="Dr. Amit Jain">Dr. Amit Jain</option>
                  <option value="Dr. Daljeet Singh">Dr. Daljeet Singh</option>
                  <option value="Dr. Sumeet Sehra">Dr. Sumeet Sehra</option>
                  <option value="Dr. Inderjit Dhanoa">Dr. Inderjit Dhanoa</option>
                  <option value="Prof. Goldendeep">Prof. Goldendeep</option>
                  <option value="Prof. Gurjit Kahlon">Prof. Gurjit Kahlon</option>
                  <option value="Dr. Hardeep Kang">Dr. Hardeep Kang</option>
                  <option value="Prof. Harkomal Kaur">Prof. Harkomal Kaur</option>
                  <option value="Prof. Jasdeep Joia">Prof. Jasdeep Joia</option>
                  <option value="Prof. Jasmine">Prof. Jasmine</option>
                  <option value="Prof. Jaswant">Prof. Jaswant</option>
                  <option value="Prof. Kamaldeep">Prof. Kamaldeep</option>
                  <option value="Prof. Kapil">Prof. Kapil</option>
                  <option value="Prof. Kuljit">Prof. Kuljit</option>
                  <option value="Prof. Mandeep Walia">Prof. Mandeep Walia</option>
                  <option value="Prof. Manjot Gill">Prof. Manjot Gill</option>
                  <option value="Prof. Manpreet Mano">Prof. Manpreet Mano</option>
                  <option value="Prof. Palak">Prof. Palak</option>
                  <option value="Prof. Priti">Prof. Priti</option>
                  <option value="Prof. Priyanka">Prof. Priyanka</option>
                  <option value="Prof. Shailja">Prof. Shailja</option>
                  <option value="Prof. Supreet">Prof. Supreet</option>
                  <option value="Dr. Vivek Thapar">Dr. Vivek Thapar</option>
                  <option value="Prof. Satinderpal">Prof. Satinderpal</option>
                  <option value="Prof. Amanpreet Brar">Prof. Amandapreet Brar</option>
                  <option value="Prof. Jasbir Saini">Prof. Jasbir Saini</option>
                  <option value="Dr. Kiran">Dr. Kiran</option>
                  <option value="Dr. Sita">Dr. Sita</option>
                  <option value="Prof. Meetali">Prof. Meetali</option>
                  <option value="Ms. Lakhvir Kaur">Ms. Lakhvir Kaur</option>
                  <option value="Ms. Maninder Kaur">Ms. Maninder Kaur</option>
                  <option value="Ms. Harminder Kaur">Ms. Harminder Kaur</option>
                  <option value="Prof. Kamaljeet Kaur">Prof. Kamaljeet Kaur</option>
                  <option value="Prof. Paramveer Kaur">Prof. Paramveer Kaur</option>
                  <option value="Prof. Harshim">Prof. Harshim</option>
                  <option value="Prof. Palak Sood">Prof. Palak Sood</option>
                  <option value="Prof. Taman Kumar">Prof. Taman Kumar</option>
                </select>
              </div>
    
            
              <div className="form-row">
                <label>Co-author(s):</label>
               <textarea name='co' type='text' value={formData.co} onChange={handleChange} placeholder='Enter Co-author(s)' ></textarea>
          </div>
          <div className="form-row">
                <label>Publisher:</label>
               <textarea name='publisher' type='text' value={formData.publisher} onChange={handleChange} placeholder='Enter Publisher' ></textarea>
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
export default  Bookpublished;