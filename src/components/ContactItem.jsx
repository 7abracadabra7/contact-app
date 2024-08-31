import React from "react";
import styles from "./ContactItem.module.css";
const ContactItem = ({ contact, onDelete }) => {
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
        <span>👁</span>
        <span>✏</span>
        <span onClick={() => onDelete(contact.id)}>🗑</span>
      </div>
    </div>
  );
};

export default ContactItem;
