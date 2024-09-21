import React, { useContext } from "react";
import styles from "./ContactItem.module.css";
import { contactContext } from "./AddContact";

const ContactItem = ({ contact }) => {
  const { deleteHandler, editHandler } = useContext(contactContext);
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
        <button onClick={() => editHandler(contact.id)}>Edit</button>
        <button onClick={() => deleteHandler(contact.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ContactItem;
