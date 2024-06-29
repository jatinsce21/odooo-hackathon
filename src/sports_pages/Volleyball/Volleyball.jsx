import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import './Volleyball.css';
import { useNavigate } from 'react-router-dom';

const volleyballPlaces = [
  {
    name: "Place 1",
    ownerPhone: "+123 456 7891",
    location: "123 Main St, City, Country",
    schedule: "Mon-Fri: 8am - 10pm",
    rating: 4.5,
  },
  {
    name: "Place 2",
    ownerPhone: "+123 456 7892",
    location: "456 Another St, City, Country",
    schedule: "Sat-Sun: 10am - 8pm",
    rating: 4.0,
  },
  {
    name: "Place 3",
    ownerPhone: "+123 456 7892",
    location: "456 Another St, City, Country",
    schedule: "Sat-Sun: 10am - 8pm",
    rating: 4.0,
  },
  {
    name: "Place 4",
    ownerPhone: "+123 456 7892",
    location: "456 Another St, City, Country",
    schedule: "Sat-Sun: 10am - 8pm",
    rating: 4.0,
  },
  {
    name: "Place 5",
    ownerPhone: "+123 456 7892",
    location: "456 Another St, City, Country",
    schedule: "Sat-Sun: 10am - 8pm",
    rating: 4.0,
  },
  {
    name: "Place 6",
    ownerPhone: "+123 456 7892",
    location: "456 Another St, City, Country",
    schedule: "Sat-Sun: 10am - 8pm",
    rating: 4.0,
  },
];

const Volleyball = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/payment');
  };
  return (
    <div>
      <Navbar />
      <div className="volleyball__content">
        <h1>volleyball Places</h1>
        <div className="volleyball__places">
          {volleyballPlaces.map((place, index) => (
            <div key={index} className="volleyball__place">
              <h2>{place.name}</h2>
              <p><strong>Phone:</strong> {place.ownerPhone}</p>
              <p><strong>Location:</strong> {place.location}</p>
              <p><strong>Schedule:</strong> {place.schedule}</p>
              <p><strong>Rating:</strong> {place.rating} / 5</p>
              <button className="book-now-button" onClick={handleBookNow}>Book Now</button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volleyball;
