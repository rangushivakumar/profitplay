import { useState } from "react";
import livitlogo from "./assets/livitlogo.jpeg";
import profitplay from './assets/profitplay.jpeg';
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    reason: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send data to a server
    console.log('Form submitted', formData);
    alert('Your Request Has Been Submitted');
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={profitplay} className="logo" alt="Livit Logo" />
      </div>

      <h2>PROFITPLAY</h2>
      <h2>Account Deletion Request</h2>

      <form onSubmit={handleSubmit} className="account-deletion-form" >
        
        <div className="form-group">
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            placeholder="Enter Your Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter Your Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="reason">Why do you want to delete your account ?</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            rows="4"
            required
            placeholder="Enter Reason For Account Deletion"
          />
        </div>

        <button type="submit">Submit Request</button>
      </form>

    </div>
  );
}

export default App;
