import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

function ForecastSummaries({ forecasts, onForecastSelect }) {
  return (
    <div className="forecast-summaries frosted-glass">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon.toString()}
          onSelect={onForecastSelect}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.number,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
    })
  ),
  onForecastSelect: PropTypes.func.isRequired,
};

ForecastSummaries.defaultProps = {
  forecasts: { date: 1111111 },
};
