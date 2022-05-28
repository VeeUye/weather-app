import "../styles/App.css";
import React from "react";
import { PropTypes } from "prop-types";
import LocationDetails from "./LocationDetails";

function App({ location }) {
  const { city, country } = location;
  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
    </div>
  );
}

export default App;

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    // eslint-disable-next-line prettier/prettier
    country: PropTypes.string
    // eslint-disable-next-line prettier/prettier
  }).isRequired
};
