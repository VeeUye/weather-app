import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        <p className="forecast-details__date">{formattedDate}</p>
      </div>
      <div className="forecast-details__temperature">
        <p className="forecast-details__temperature">
          Max Temperature: {temperature.max}&deg;C
        </p>
      </div>
      <div className="forecast-details__temperature">
        <p className="forecast-details__temperature">
          Min Temperature: {temperature.min}&deg;C
        </p>
      </div>
      <div className="forecast-details__humidity">
        <p className="forecast-details__humidity">Humidity: {humidity}</p>
      </div>
      <div className="forecast-details__wind">
        <p className="forecast-details__wind">
          Wind: {wind.speed}
          {wind.direction}
        </p>
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};
