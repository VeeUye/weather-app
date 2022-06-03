import PropTypes from "prop-types";
import React from "react";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText }) {
  const handleInputChange = (event) => setSearchText(event.target.value);
  return (
    <div className="search-form">
      <input
        type="text"
        id="search"
        name="q"
        placeholder="Enter city..."
        onChange={handleInputChange}
        value={searchText}
      />
      <button type="submit">Search</button>
    </div>
    // </form>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
