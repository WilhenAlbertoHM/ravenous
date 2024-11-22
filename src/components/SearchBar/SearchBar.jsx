import styles from "./SearchBar.module.css";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

function SearchBar() {
    function renderSortByOptions() {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>;
        });
    }

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortOptions}>
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div className={styles.SearchBarFields}>
                <input type="text" placeholder="Search Stores" />
                <input type="text" placeholder="Location" />
            </div>
            <div className={styles.SearchBarSubmit}>
                <a href="">Search</a>
            </div>
        </div>
    );
}


export default SearchBar;