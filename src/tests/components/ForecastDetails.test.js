import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    icon: "800",
    temperature: {
      max: 22,
      min: 12,
    },
    humidity: 80,
    wind: {
      speed: 60,
      direction: "ene",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("it renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText(/January/i)).toHaveAttribute(
      "class",
      "forecast-details__date"
    );
    expect(getByText(/22/)).toHaveAttribute(
      "class",
      "forecast-details__temperature"
    );
    expect(getByText(/12/)).toHaveAttribute(
      "class",
      "forecast-details__temperature"
    );
    expect(getByText(/80/)).toHaveAttribute(
      "class",
      "forecast-details__humidity"
    );
    expect(getByText(/60/i)).toHaveAttribute("class", "forecast-details__wind");
    expect(getByText(/ene/)).toHaveAttribute("class", "forecast-details__wind");
  });
});
