import "./App.css"
import BusinessList from "../BusinessList/BusinessList.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Title from "../Title/Title.jsx";

function App() {
  return (
    <div>
      <Title />
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App
