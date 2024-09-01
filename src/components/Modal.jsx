import styles from "./Modal.module.css";
const Modal = ({ setShowModal }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button onClick={setShowModal(false)}>X</button>
        <div className={styles.title}>
          Are You Sure You Want to Add this contact?
        </div>
        <div className={styles.body}>
          <p>The next page</p>
        </div>
        <div className={styles.footer}>
          <button onClick={setShowModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
