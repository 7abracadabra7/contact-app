/* eslint-disable react/prop-types */
import styles from "./ContactsList.module.css";

const ContactsList = ({ contacts }) => {
  return (
    <div>
      <h3>Contacts List</h3>
      <div className={styles.container}>
        {contacts.map((contact) => (
          <div className={styles.card} key={contact.id}>
            <div className={styles.profileImage}>
              <img src="../../images/4.avif"></img>
            </div>
            <div className={styles.infoItems}>
              <p>
                {contact.name} {contact.lastname}
              </p>
              <p>{contact.email}</p>
              <p>{contact.number}</p>
            </div>
            <div className={styles.icons}>
              <span>👁</span>
              <span>✏</span>
              <span>🗑</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsList;
