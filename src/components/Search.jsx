import styles from "./Search.module.css";
const Search = ({ searchHandler }) => {
  return (
    <div>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search Contact"
        onChange={(event) => searchHandler(event.target.value)}
      />
    </div>
  );
};

export default Search;
