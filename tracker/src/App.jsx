import React from 'react'
import ServiceProviders from './Components/ServiceProviders';


const App = () => {
  return (
    const validator = require('./validator');
    const provider = require('./provider');
    const { generateRandomLocation } = require('./locationGenerator'); // Import the updated random location generator
    
    module.exports = {
      isValidPhoneNumber: validator.isValidPhoneNumber,
      getServiceProvider: provider.getServiceProvider,
      generateRandomLocation, // Export the updated random location generator with SIM details
    };

    <div>
      input("Enter phone number in international format")

      <ServiceProviders />
    </div>
  )
}

export default App
