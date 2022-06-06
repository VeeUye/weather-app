import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import WeatherIcon from "react-icons-weather";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, icon, humidity, temperature, wind } = forecast;
  const formattedDate = moment(date).format("dddd Do MMMM");
  return (
    <div className="forecast-details" id="jump-link">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon.toString()} />
      </div>
      <div className="forecast-details__temperature">
        High: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__temperature">
        Low: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">
        Humidity: {humidity}&#37;
      </div>
      <div className="forecast-details__wind">
        Wind: {wind.speed}mph&nbsp;
        {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    icon: PropTypes.string,
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
