import "../styles/App.css";
import React, { useState } from "react";
import { PropTypes } from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const { city, country } = location;
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
}

export default App;

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
