import React from "react";
import styles from "./ContactItem.module.css";
const ContactItem = ({ contact, onDelete, onEdit }) => {
  console.log({ contact });
  return (
    <div className={styles.card}>
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
        <button onClick={() => onEdit(contact.id)}>Edit</button>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ContactItem;
