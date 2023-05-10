import React from "react";
import { Button } from "react-bootstrap";

export default function SearchBar() {
  return (
    <div>
      <form className="flex items-center search-wrapper ">
        <input
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          className="search-input"
        />

        <Button variant="light">
          <i className="fa fa-search" aria-hidden="true"></i>
        </Button>
      </form>
    </div>
  );
}
