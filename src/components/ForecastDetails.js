import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = moment(date).format("dddd Do MMMM");
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temperature">
        Max Temperature: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__temperature">
        Min Temperature: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}</div>
      <div className="forecast-details__wind">
        Wind: {wind.speed}
        {wind.direction}
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
