import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        console.error(
          "The city was not found. Check for typos and that the city is located within the UK.",
          error
        );
      }
      if (status === 500) {
        console.error("Something went wrong on the server side.", error);
      }
    });
};

export default getForecast;
