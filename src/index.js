import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Schedule from "./components/Schedule/Schedule";
import Booking from "./components/Booking/Booking";
import Football from "./sports_pages/Football/Football";
import Volleyball from "./sports_pages/Volleyball/Volleyball";
import Cricket from "./sports_pages/Cricket/Cricket";
import Pickleball from "./sports_pages/Pickelball/Pickleball";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Payment from "./components/Payment/Payment";
import LoginSignUp from "./components/LoginSignup/LoginSignup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/football",
    element: <Football />,
  },
  {
    path: "/volleyball",
    element: <Volleyball />,
  },
  {
    path: "/cricket",
    element: <Cricket />,
  },
  {
    path: "/pickleball",
    element: <Pickleball />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  { path: "/about", element: <AboutUs /> },
  { path: "/contact", element: <ContactUs /> },
  {
    path: "/login",
    element: <LoginSignUp />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
