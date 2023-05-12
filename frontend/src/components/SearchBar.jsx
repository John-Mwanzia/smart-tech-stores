import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function SearchBar() {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(query ? `/search/?query=${query}` : '/search')
    }

  return (
    <div>
      <form className="flex items-center search-wrapper sm:absolute  lg:relative" onSubmit={submitHandler}>
        <input
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-button"
          className="search-input"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
        />

        <button variant="light" type="submit" id="search-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  );
}
