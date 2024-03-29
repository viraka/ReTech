import React from 'react';
import styles from './SearchBar.module.css'

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



    return (
        <div className={styles.searchBar}>
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

        </div>
    );
};

export default SearchBar;
