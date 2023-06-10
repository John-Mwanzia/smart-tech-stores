import React, { useState } from "react";
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
      <form className="flex items-center search-wrapper w-[300px]  h-[40px] rounded-[30px] " onSubmit={submitHandler}>
        <input
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-button"
          className=" flex-1 border lg:border-none outline-none rounded-tl-[30px] rounded-bl-[30px] text-[18px] pl-[10px] h-10 w-[100%]"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="bg-transparent border-none outline-none pl-[6px] pr-[6px] rounded-tr-[30px] rounded-br-[30px] cursor-pointer " type="submit" id="search-button">
          <i className="fa fa-search text-black text-xl" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  );
}
