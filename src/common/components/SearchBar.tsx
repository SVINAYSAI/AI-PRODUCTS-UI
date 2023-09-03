import React from "react";

const SearchBar = () => {
  return (
    <>
      <svg
        className="w-6 h-6 absolute top-1/2 -translate-y-1/2 left-4 fill-main-300"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
      </svg>
      <input
        type="text"
        placeholder="Search..."
        className="outline-none border border-transparent focus:border-altThree-light/20 text-main-200 text-sm pl-12 pr-4 py-2.5 w-64 rounded-md bg-main-500 placeholder:text-main-500"
      />
    </>
  );
};
export default SearchBar;
