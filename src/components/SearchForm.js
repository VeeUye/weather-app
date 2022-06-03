import React from "react";
import "../styles/SearchForm.css";

function SearchForm() {
  return (
    <form>
      <lable>
        <div className="search-form">
          <input
            type="search"
            id="search"
            name="q"
            placeholder="Enter city..."
          />
          <button type="submit">Search</button>
        </div>
      </lable>
    </form>
  );
}

export default SearchForm;
