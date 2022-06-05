import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import WeatherIcon from "react-icons-weather";
import "../styles/ForecastSummary.css";

function ForecastSummary(props) {
  const { date, description, icon, onSelect, temperature } = props;
  const formattedDate = moment(date).format("dddd");

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon.toString()} />
      </div>
      <div className="forecast-summary__temperature">{temperature.max}˚C</div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" className="button" onClick={() => onSelect(date)}>
        <a href="#jump-link">More details...</a>
      </button>
    </div>
  );
}

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};
