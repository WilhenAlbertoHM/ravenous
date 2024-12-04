import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

function SearchBar({ searchYelp }) {
    const [store, setStore] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match");

    const getSortFromClick = (sortByOption) => {
        return sortBy === sortByOption ? styles.active : "";
    };

    const handleStoreChange = (event) => {
        setStore(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        searchYelp(store, location, sortBy);
    };

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li className={ getSortFromClick(sortByOptionValue) }
                    key={ sortByOptionValue }
                    onClick={() => { handleSortByChange(sortByOptionValue) }}
                >
                    {sortByOption}
                </li>
            );
        }); 
    };

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortOptions}>
                <ul>{renderSortByOptions()}</ul>
            </div>
            <form onSubmit={handleSearch}>
                <div className={styles.SearchBarFields}>
                    <input type="text" placeholder="Search Stores" onChange={handleStoreChange}/>
                    <input type="text" placeholder="Location" onChange={handleLocationChange}/>
                </div>
                <div className={styles.SearchBarSubmit}>
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    );
}


export default SearchBar;