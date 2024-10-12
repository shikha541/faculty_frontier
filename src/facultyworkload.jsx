import React, { useState } from 'react';

import './facultyworkload.css';

const Facultyworkload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
   employeeNo:'',dateOfJoining:'',teachingExperience:'0.00',salaryPay:'0.00',relievingDate:'',industrialExperience:'0.00',
   facultyServing:"Select",facultyType:'Select',responsibilities:'',remarks:'',currentDesignation:'',retirementDate:"",
   lastPromotion:"",y:'',faculty:'',month:'',title:'',supervisor:'',university:'',status:'Select'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [entries] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to the backend server
    try {
      const response = await fetch('http://localhost:5000/saveFacultyProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.text();
      alert(result); // Display success message or handle errors
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error saving profile');
    }
  };


  return (
    <div className="profile-form-container">
      <form onSubmit={handleSubmit}>
      <h3>Professional Details</h3>
        <div className="form-grid">
          
        <div className="form-row">
            <label>Employee No:</label>
            <input
              type="text"
              name="employeeNo"
              placeholder='enter employee no.'
              value={formData.employeeNo}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Date of Joining: <span className="required">*</span></label>
            <input
              type="date"
              name="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Teaching Experience (in Years):<span className="required">*</span></label>
            <input
              type="number"
              name="teachingExperience"
              value={formData.teachingExperience}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-row">
            <label>Faculty Serving: <span className="required">*</span></label>
            <select
              name="facultyServing"
              value={formData.facultyServing}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Faculty 1">Permanent</option>
              <option value="Faculty 2">Contract-basis</option>
              <option value="Faculty 3">Part-time</option>
            </select>
          </div>

          <div className="form-row">
            <label>Remarks:</label>
            
            <textarea type='text' name='remarks'  value={formData.remarks} onChange={handleChange} placeholder='Enter remarks'></textarea>
          </div>

          <div className="form-row">
            <label>Current Designation: <span className="required">*</span></label>
            <select
              name="currentDesignation"
              value={formData.currentDesignation}
              onChange={handleChange}
            > 
            <option value="hod">Hod</option>
            <option value="professor">Professor</option>
            '<option value="lecturer">Lecturer</option>
              <option value="Assistant Professor">Assistant Professor</option>
              <option value="Associate Professor">Associate Professor</option>
              <option value="principal">Principal</option>
            </select>
          </div>

          <div className="form-row">
            <label>Retirement Date:</label>
            <input
              type="date"
              name="retirementDate"
              value={formData.retirementDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label>Faculty Type: <span className="required">*</span></label>
            <select
              name="facultyType"
              value={formData.facultyType}
              onChange={handleChange}
              required
            >
              <option value="Teaching">Teaching</option>
              <option value="Non-Teaching">Non-Teaching</option>
            </select>
          </div>
          <div className="form-row">
            <label>Relieving Date:</label>
            <input
              type="date"
              name="relievingDate"
              value={formData.relievingDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label>Industrial Experience (in Years):</label>
            <input
              type="number"
              name="industrialExperience"
              value={formData.industrialExperience}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label for='year'>Last Promotion Year:</label>
            <input
              type="number"
              id='year' min='1900' max='2024' placeholder='YYYY'
              name="lastPromotion"
              value={formData.lastPromotion}
              onChange={handleChange}
            />
  
          </div>
          <div className="form-row">
            <label>Responsibilities:</label>
            <textarea type='text' name='responsibilities' placeholder='enter your responsibilities' value={formData.responsibilities} onChange={handleChange}></textarea>
          </div>
        
          <div className="form-row">
            <label>Salary Pay (in ₹):</label>
            <input
              type="number"
              name="salaryPay"
              value={formData.salaryPay}
              onChange={handleChange}
            />
          </div>
        </div>

      
      </form>
      <form>
        <h3>Pursuing PhD</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-row">
              <label>Faculty Name:</label>
              <input type='text'
              name='faculty'
              value={formData.faculty}
              placeholder='Enter the name'></input>
            </div>
            <div className="form-row">
              <label>Enrollment month and year:</label>
              <input type='month-year'
              name='month'
              value={formData.month}
              placeholder='YYYY/MM'></input>
            </div>
            <div className="form-row">
              <label>Title:</label>
              <input type='text'
              name='title'
              value={formData.title}
              placeholder='Enter the topic'></input>
            </div>
            <div className="form-row">
              <label>Supervisor(s):</label>
              <input type='text'
              name='supervisor'
              value={formData.supervisor}
              placeholder='Enter the name of supervisor(s)'></input>
            </div>
            <div className="form-row">
              <label>University/Institution</label>
              <input type='text'
              name='university'
              value={formData.university}
              placeholder='Enter the name of university/institute'></input>
            </div>
            <div className="form-row">
              <label>PhD Status:</label>
              <select type='text'  name='status' value={formData.status} onChange={handleChange}>
                <option value='On Going'>On Going</option>
                <option value='complete'>Completed</option>
              </select>
            </div>
            <div className="form-row">
              <label>PhD. during assessment year:</label>
              <input type='date'
              name='y'
              value={formData.y}
              placeholder='YYYY'></input>
            </div>
          </div>
        </form>
      </form>
      <h3> Qualification Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-row">
          <label>Highest Qualification:<span className="required">*</span></label>
            <select
              type="text"
              name="highest qualification"
              value={formData.highestqualification}
              onChange={handleChange}
              required
            >
            <option value="Phd.">Phd</option>
            <option value="Mtech/M.E.">Mtech/M.E.</option>
            <option value="12th">Senior Secondary(12th)</option>
            <option value="10th">Matrics(10th)</option>
            <option value="barch">B.Arch</option>
            <option value="bcom">B.Com.</option>
            <option value="be">Btech/B.E.</option>
            <option value="bpharm">B.Pharm</option>
            <option value="bsc.">B.Sc</option>
            <option value="ba">BA</option>
            <option value="bca">BCA</option>
            <option value="M.Arch">M.Arch</option>
            <option value="mcom">M.Com</option>
            <option value="mpharm">M.Pharm</option>
            <option value="mphil">M.Phil</option>
            <option value="msc">M.Sc</option>
            <option value="ma">MA</option>
            <option value="mba">MBA</option>
            <option value="mca">MCA</option>
            <option value="puc">PUC</option>
            <option value="sslc">SSLC</option>
            </select>
          </div>
          <div className="form-row">
            <label>University: <span className="required">*</span></label>
            <input 
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            required>

            </input>
          </div>
          <div className="form-row">
            <label>Year of passing: <span className="required">*</span></label>
            <input 
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required>

            </input>
          </div>
          <div className="form-row">
            <label>Marks Obtained: <span className="required">*</span></label>
            <input 
            type="number"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            required>

            </input>
          </div>
          <div className="form-row">
            <label>Maximum marks: <span className="required">*</span></label>
            <input 
            type="number"
            name="max"
            value={formData.max}
            onChange={handleChange}
            required>

            </input>
          </div>
          <div className="form-row">
            <label>Specilization: <span className="required">*</span></label>
            <textarea type='text' name='specialization' placeholder="Enter specialization" value={formData.specilization} onChange={handleChange} required></textarea>
          </div>
          <div className="form-row">
            <label>Research Interest: </label>
            <textarea type='text' name='research' placeholder="enter research interest" value={formData.research} onChange={handleChange} ></textarea>
          </div>
          <div className="form-row">
            <label>Skills: </label>
            <textarea type='text' name='skills' placeholder="Enter your skills" value={formData.skills} onChange={handleChange} ></textarea>
          </div>
          </div>
          <form>
            <div className="table-container">
              <div className="filter-section">
            <label>Show entries: </label>
        <input type="number" defaultValue={20} min={1} />

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        /></div>
          <table className="table">
          <thead>
            <tr>
              <th>SrNo</th>
              <th>Qualification</th>
              <th>University</th>
              <th>Year of Graduation</th>
              <th>Upload</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {entries.length > 0 ? (
              entries.filter(entry => entry.title.includes(searchTerm)).map((entry, index) => (
                <tr key={index}>
                  <td>{entry.SrNo}</td>
                  <td>{entry.Qualification}</td>
                  <td>{entry.University}</td>
                  <td>{entry.Year}</td>
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
      )}</tbody></table></div>
          </form>
        <div className="button-section">
          <button type="submit">Save</button>
          <button type="submit">Reset</button>
          <button type="submit">Cancel</button>
        </div>
     
        </form>
       </div>
  
  );
};


export default Facultyworkload;
