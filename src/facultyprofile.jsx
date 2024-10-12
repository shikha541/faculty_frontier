import React, { useState } from 'react';
import './facultyworkload.css';

const FacultyProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    title: 'Prof.',
    firstName: '',
    lastName: '',
    email: '',
    aadhaar: '',
    dob: '',
    bloodGroup: '',
    presentaddr:'',
    permanent:'',pan:'',
    contact:'',
    url:'',
    employee:'abc@gndec.ac.in'
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
      <h3>Faculty Profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="profile-photo-section">
        <div className="profile-photo img">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<input
  type="file"
  className="file-input file-input-bordered file-input-primary w-full max-w-xs" 
  onChange={handleImageChange}/>
  

        </div>
        
       
 <h3>Personal  Details</h3>
        <div className="form-grid">
       
          <div className="form-row">
            <label htmlFor="title">Title: <span className="required">*</span></label>
            <select id="title" name="title" value={formData.title} onChange={handleChange}>
              <option value="Prof.">Prof.</option>
              <option value="Dr.">Dr.</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="firstName">First Name: <span className="required">*</span></label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter First Name" required />
          </div>

          <div className="form-row">
            <label htmlFor="lastName">Last Name: <span className="required">*</span></label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Last Name" required />
          </div>

          <div className="form-row">
            <label htmlFor="email">Other Email Id: <span className="required">*</span></label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your other email id" required />
          </div>
          <div className="form-row">
            <label htmlFor="College email">College Employee Id:<span className="required">*</span></label>
            <input type="email" id="employee" name="employee" value={formData.employee} onChange={handleChange} placeholder="Enter your college employee id " required />
          </div>
          <div className='form-row'>
            <label>Contact No.<span className="required">*</span></label>
            <input type='number' name='contact' value={formData.contact} onChange={handleChange} placeholder='Enter your mobile no.'></input>
          </div>
          <div className="form-row">
            <label htmlFor="aadhaar">Aadhaar Number:</label>
            <input type="text" id="aadhaar" name="aadhaar" value={formData.aadhaar} onChange={handleChange} placeholder="Enter Aadhaar Number" />
          </div>
          <div className='form-row'>
            <label>Website<span className="required">*</span></label>
            <input type='url' name='url' value={formData.url} onChange={handleChange} placeholder='Enter the website'></input>
          </div>
          <div className="form-row">
            <label htmlFor="presentaddr">Present Address: </label>
            
            <textarea type='text' name='presentaddr' placeholder="Enter the present address" value={formData.presentaddr} onChange={handleChange}></textarea>
          </div>
          <div className="form-row">
            <label >Permanent Address: </label>
            <textarea type='text'name='permanent' value={formData.permanent} placeholder="Enter the address"></textarea>
          </div>
          <div className='form-row'>
            <label>PAN no.<span className="required">*</span></label>
            <input type='number' name='pan' value={formData.pan} onChange={handleChange} placeholder='Enter your pan no.'></input>
          </div>
          <div className="form-row">
            <label htmlFor="dob">Date of Birth: <span className="required">*</span></label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <label htmlFor="bloodGroup">Blood Group:</label>
            <select id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="B-">B-</option>
              <option value="A-">A-</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>

        <div className="button-section">
          <button type="submit">Save</button>
          <button type="submit">Close</button>
        </div>
      </form>
    </div>
  );
};

export default FacultyProfile;
