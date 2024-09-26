import React, { useContext, useEffect } from "react";
import styles from "./ContactItem.module.css";
import { contactContext } from "./AddContact";

const ContactItem = ({ user }) => {
  const {
    deleteHandler,
    editHandler,
    selected,
    selectedContacts,
    setSelectedContacts,
  } = useContext(contactContext);

  useEffect(() => {}, [selectedContacts]);

  //============== Select Handler ===============
  const selectHandler = (event) => {
    console.log(event.target.checked);
    const value = event.target.value;
    const isSelected = event.target.checked;

    if (isSelected) {
      setSelectedContacts([...selectedContacts, value]);
      console.log("add", selectedContacts);
    } else {
      setSelectedContacts((prev) => {
        return prev.filter((id) => {
          return id !== value;
        });
      });
      console.log("delete", selectedContacts);
    }

    console.log("final", selectedContacts);
  };

  // console.log("hi", contacts);

  return (
    <div className={styles.card}>
      <div className={styles.profileImage}>
        <img src="../../images/4.avif" />
        {selected && (
          <input
            type="checkbox"
            id={user.id}
            value={user.id}
            onChange={(event) => selectHandler(event)}
            checked={selectedContacts.includes(user.id)}
          />
        )}
      </div>
      <div className={styles.infoItems}>
        <p>
          {user.name} {user.lastname}
        </p>
        <p>{user.email}</p>
        <p>{user.number}</p>
      </div>
      <div className={styles.icons}>
        <button onClick={() => editHandler(user.id)}>Edit</button>
        <button onClick={() => deleteHandler(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ContactItem;
