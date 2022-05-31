import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: "80%",
    wind: {
      speed: "60mph",
      direction: "s",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails
        date={validProps.date}
        temperature={validProps.temperature}
        humidity={validProps.humidity}
        wind={validProps.wind}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("it renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastDetails
        date={validProps.date}
        temperature={validProps.temperature}
        humidity={validProps.humidity}
        wind={validProps.wind}
      />
    );

    expect(getByText("Thu Jan 01 1970")).toHaveAttribute(
      "class",
      "forecast-details__date"
    );
    expect(getByText("22")).toHaveAttribute(
      "class",
      "forecast-details__temperature-max"
    );
    expect(getByText("12˚C")).toHaveAttribute(
      "class",
      "forecast-details__temperature-min"
    );
    expect(getByText("80%")).toHaveAttribute(
      "class",
      "forecast-details__humidity"
    );
    expect(getByText("60mph")).toHaveAttribute(
      "class",
      "forecast-details__wind"
    );
    expect(getByText("s")).toHaveAttribute("class", "forecast-details__date");
  });
});
// TODO need to determine if getByText works for single letter. Icon / getByTestID needed?
