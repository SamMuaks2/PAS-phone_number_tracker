import React, { useState } from 'react';
import providersData from './providersData.json';

const ServiceProviders = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [serviceProviders, setServiceProviders] = useState([]);

  // Function to handle country selection
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setServiceProviders(providersData[country] || []);
  };

  return (
    <div>
      <h1>Mobile Service Providers</h1>
      <label htmlFor="country">Select a country:</label>
      <select
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">--Select a Country--</option>
        {Object.keys(providersData).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <h2>Providers in {selectedCountry}:</h2>
          <ul>
            {serviceProviders.map((provider, index) => (
              <li key={index}>{provider}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceProviders;
