import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Schedule.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Schedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/events");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleCancelEvent = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/events/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to cancel event");
      }
      setEvents(events.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Error cancelling event:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "status-approved";
      case "Pending":
        return "status-pending";
      default:
        return "";
    }
  };

  return (
    <div>
      <Navbar />
      <div className="schedule-container">
        <h1>Sports Facility Schedule</h1>
        <div className="scheduled-events">
          <h2>Scheduled Events</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Facility</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{moment(event.date).format("MMMM D, YYYY")}</td>
                  <td>{event.title}</td>
                  <td>{event.facility}</td>
                  <td>
                    <span className={`status ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => handleCancelEvent(event.id)}>
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
