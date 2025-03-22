import { useState, useEffect } from "react";
import profitplay from "./assets/profitplay.jpeg";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    reason: "",
  });

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Your Request Has Been Submitted");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://collegeproject-env.eba-ybgbtz3k.ap-south-1.elasticbeanstalk.com/admin/get/placements"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response:", result); // ✅ Console logging the response
        setData(result);
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="logo-container">
        <img src={profitplay} className="logo" alt="Livit Logo" />
      </div>

      <h2>PROFITPLAY</h2>
      <h2>Account Deletion Request</h2>

      {/* ✅ Display first object data if available */}
      {data && Array.isArray(data) && data.length > 0 ? (
        <div className="placement-info">
          <h3>First Placement Record</h3>
          <p><strong>ID:</strong> {data[0].id}</p>
          <p><strong>College Code:</strong> {data[0].collegeCode}</p>
          <p><strong>Year:</strong> {data[0].year}</p>
          <p><strong>Placement Percentage:</strong> {data[0].placementPercentage}%</p>
          {/* <p><strong>Highest Package:</strong> {data[0].highestPackage} LPA</p> */}
        </div>
      ) : (
        <p>Loading placement data...</p>
      )}

      {error && <p className="error">Error: {error}</p>}

      <form onSubmit={handleSubmit} className="account-deletion-form">
        <div className="form-group">
          <label htmlFor="username">Username: </label>
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
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="reason">
            Why do you want to delete your account?
          </label>
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
