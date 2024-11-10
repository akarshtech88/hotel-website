import React from 'react';
import HotelInfo from './components/HotelInfo';
import './App.css';

const App = () => {
  // Static hotel data
  const hotelData = {
    name: "Annapurna Hotel(ex Alborado Beach)",
    address: "123 Seaside Blvd, Malibu, CA",
    rating: 4.5,
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Gym"],
    description: "A beautiful ocean-side resort with stunning views, luxurious rooms, and top-notch amenities.",
    image: "https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with a valid image URL
  };

  return (
    <div className="app">
      <h1 className="app-title">Hotel Information</h1>
      <HotelInfo
        name={hotelData.name}
        address={hotelData.address}
        rating={hotelData.rating}
        amenities={hotelData.amenities}
        description={hotelData.description}
        image={hotelData.image}
      />
    </div>
  );
};

export default App;


