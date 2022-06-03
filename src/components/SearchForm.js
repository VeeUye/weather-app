// TODO add enter to sumbit button

import PropTypes from "prop-types";
import React from "react";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Enter city..."
        onChange={handleInputChange}
        value={searchText}
      />
      <button type="submit" data-testid="button-text" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
