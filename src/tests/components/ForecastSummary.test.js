import React from "react";
import { render } from "@testing-library/react";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };
  it("renders the forecast summary correctly", () => {});
});
