import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Nottingham",
    setSearchText: () => {},
    onSubmit: () => {},
  };
  it("render correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the submit button correctly", () => {
    const { getByTestId } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
      />
    );

    expect(getByTestId("button-text")).toHaveTextContent(/search/i);
  });
});
