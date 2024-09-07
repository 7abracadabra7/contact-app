import AddContact from "./components/AddContact";
import Header from "./components/header";
import styles from "./App.module.css";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);
  return (
    <div className={styles.container}>
      <Header />
      <AddContact setShowModal={setShowModal} />
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
