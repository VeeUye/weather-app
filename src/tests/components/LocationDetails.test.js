import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetail", () => {
  const validProps = {
    city: "Manchester",
    country: "UK",
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <LocationDetails city={validProps.city} country={validProps.country} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city={validProps.city} country={validProps.country} />
    );

    expect(getByText(/Manchester/i)).toBeInstanceOf(HTMLHeadingElement);
  });
});
