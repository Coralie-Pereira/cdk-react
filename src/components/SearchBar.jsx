import {  useState } from "react";


function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Passer le terme de recherche au composant parent via la fonction de rappel onSearch
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center p-2 h-1 mt-1 text-black">
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border p-2 h-8"
      />
      <button onClick={handleSearch} className="bg-red-800 h-8 text-white p-2 ">
        Rechercher
      </button>
    </div>
  );
}

export default SearchBar;
