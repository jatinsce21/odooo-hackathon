import React from "react";
import { bookings } from "./bookings";
import Navbar from "../Navbar/Navbar";

const Booking = () => {
  const approvedPayments = bookings.filter(
    (booking) => booking.paymentStatus === "Paid"
  );

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "100px auto",
    padding: "20px",
    color: "white",
    border: "white",
  };

  const headingStyle = {
    color: "white",
    textAlign: "center",
  };

  const tableStyle = {
    width: "100%",
    border: "1px solid white",
    borderCollapse: "collapse",
    marginBottom: "30px",
    backgroundColor: "#fff",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    color: "black",
    fontWeight: "bold",
    padding: "12px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
  };

  const tdStyle = {
    padding: "12px",
    borderBottom: "1px solid #ddd",
  };

  const statusStyle = (status) => ({
    padding: "5px 10px",
    borderRadius: "20px",
    fontWeight: "bold",
    backgroundColor: status === "Paid" ? "#d4edda" : "#fff3cd",
    color: status === "Paid" ? "#155724" : "#856404",
  });

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <h1 style={headingStyle}>Payment and Booking History</h1>

        <h2 style={headingStyle}>Approved Payments</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Booking ID</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Service</th>
              <th style={thStyle}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {approvedPayments.map((booking) => (
              <tr key={booking.id}>
                <td style={tdStyle}>{booking.id}</td>
                <td style={tdStyle}>{booking.date}</td>
                <td style={tdStyle}>{booking.service}</td>
                <td style={tdStyle}>${booking.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={headingStyle}>Booking History</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Booking ID</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Service</th>
              <th style={thStyle}>Amount</th>
              <th style={thStyle}>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td style={tdStyle}>{booking.id}</td>
                <td style={tdStyle}>{booking.date}</td>
                <td style={tdStyle}>{booking.service}</td>
                <td style={tdStyle}>${booking.amount.toFixed(2)}</td>
                <td style={tdStyle}>
                  <span style={statusStyle(booking.paymentStatus)}>
                    {booking.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
