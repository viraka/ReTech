import React from 'react';

type Props = {
    selectedOption: string;
    setSelectedOption: (value: string) => void;
    searchTerm: string;
    setSearchTerm: (value: string) => void;

}
const SearchBar = ({ selectedOption, setSelectedOption, searchTerm, setSearchTerm }: Props) => {

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // You can perform search based on selectedOption and searchTerm
        console.log(`Searching for ${selectedOption}: ${searchTerm}`);
    };

    return (
        <div className="search-bar">
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value="product">Product</option>
                <option value="service">Service</option>
            </select>
            <input
                type="text"
                placeholder={`Search ${selectedOption}...`}
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
