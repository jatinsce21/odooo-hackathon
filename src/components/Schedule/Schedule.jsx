import React, { useState } from "react";
import moment from "moment";
import "./Schedule.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Schedule = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      date: new Date(),
      title: "Sample Event",
      facility: "Tennis Court",
      status: "Approved",
    },
    {
      id: 2,
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      title: "Another Event",
      facility: "Basketball Court",
      status: "Pending",
    },
    {
      id: 3,
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      title: "Third Event",
      facility: "Soccer Field",
      status: "Approved",
    },
  ]);

  const handleCancelEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
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
