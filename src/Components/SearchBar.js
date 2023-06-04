import { useState } from "react";

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <form onSubmit={(e) => handleSearch(e, searchTerm)}>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter Search Term"
      />
      <input type="submit" />
    </form>
  );
}

export default SearchBar;
