import AddContact from "./components/AddContact";
import Header from "./components/header";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <AddContact />
    </div>
  );
}

export default App;
