import React, { useState } from 'react';
import axios from 'axios';
import './dashboard.css';

const Dashboard = () => {
  const [carData, setCarData] = useState({
    VIN: '',
    CarType: '',
    ExteriorColor: '',
    InteriorColor: '',
    Ceramics: '',
    Registration: '',
    CountryCurrent: '',
    CountryOrigin: '',
    AudiExclusiveInterior: '',
    AudiExclusiveExterior: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData(prevCarData => ({
      ...prevCarData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check for empty fields
    if (Object.values(carData).some(value => value === '')) {
      setMessage('Error: All fields must be filled.');
      return;
    }
    
    // Check VIN length
    if (carData.VIN.length !== 17) {
      setMessage('Error: VIN must be 17 characters long.');
      return;
    }

    try {
      // Check if VIN is already in the database
      const checkVinResponse = await axios.get(`/api/cars/${carData.VIN}`);
      if (checkVinResponse.data) {
        setMessage('Error: VIN is already in the database.');
        return;
      }
    } catch (error) {
      // If the VIN is not found, an error is thrown, and we continue to add the new car.
      // We assume that a 404 status code means VIN is not found.
      if (error.response.status !== 404) {
        setMessage('Error: Something went wrong while checking VIN.');
        console.error(error);
        return;
      }
    }

    try {
      // Add new car since VIN is not found and all fields are filled
      const addCarResponse = await axios.post('/api/cars', carData);
      setMessage(`Success: New car added with VIN ${carData.VIN}.`);
      console.log(addCarResponse.data); // Handle the response accordingly
    } catch (error) {
      setMessage('Error: Something went wrong while adding the new car.');
      console.error(error); // Handle errors
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        {/* Generate input fields based on car attributes */}
        {Object.keys(carData).map((key) => (
          <div key={key}>
            <label>
              {key}:
              <input
                type="text"
                name={key}
                value={carData[key]}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        ))}
        {/* Submit button */}
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default Dashboard;
