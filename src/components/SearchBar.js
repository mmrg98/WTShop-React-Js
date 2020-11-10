import React from "react";

const SearchBar = (props) => {
  return (
    <div className="">
      <input
        className="form-control"
        placeholder={props.placeholder}
        name="search"
        type="text"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
