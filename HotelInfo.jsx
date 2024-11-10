import React from 'react';
import '../HotelInfo.css';

const HotelInfo = ({ name, address, rating, amenities, description, image }) => {
  return (
    <div className="hotel-info">
      <img src={image} alt={`${name}`} className="hotel-image" />
      <div className="hotel-details">
        <h2 className="hotel-name">{name}</h2>
        <p className="hotel-address">{address}</p>
        <p className="hotel-rating">Rating: {rating} / 5</p>
        <h4 className="amenities-title">Information:</h4>
        <ul className="hotel-amenities">
          {amenities.map((amenity, index) => (
            <li key={index} className="amenity-item">{amenity}</li>
          ))}
        </ul>
        <p className="hotel-description">{description}</p>
      </div>
    </div>
  );
};

export default HotelInfo;




