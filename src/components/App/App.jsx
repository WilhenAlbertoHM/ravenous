import React from "react";
import BusinessList from "../BusinessList/BusinessList.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Title from "../Title/Title.jsx";
import styles from "./App.module.css";

const business = {
  image: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "Reggie's Pizza",
  address: "123 Nowhere St",
  city: "Boston",
  state: "MA",
  zipCode: "02134",
  category: "Italian",
  rating: 4.8,
  reviewCount: 678
};

const businesses = [business, business, business, business, business];

function App() {
  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  };

  return (
    <div className={styles.App}>
      <Title />
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
