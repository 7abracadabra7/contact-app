/* eslint-disable react/prop-types */
import ContactItem from "./ContactItem";
import Search from "./Search";
import styles from "./ContactsList.module.css";
import { useContext, useEffect, useState } from "react";
import { searchContacts } from "../helper/filterContacts";
import { contactContext } from "./AddContact";

const ContactsList = () => {
  const { contacts, selected, setSelected, deleteMultipleItems } =
    useContext(contactContext);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);
  const searchHandler = (name) => {
    console.log("your searched value", name);
    const displayedContacts = searchContacts(contacts, name);
    setFilteredContacts(displayedContacts);
    console.log("hello", filteredContacts);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3>Contacts List</h3>
        {!selected ? (
          <button
            className={styles.selectButton}
            onClick={() => setSelected(true)}
          >
            Select Contacts
          </button>
        ) : (
          <button
            className={styles.selectButton}
            onClick={() => deleteMultipleItems()}
          >
            Delete Contacts
          </button>
        )}
      </div>
      <div className={styles.contacts}>
        {contacts.length > 0 ? <Search searchHandler={searchHandler} /> : ""}
        {contacts.length ? (
          filteredContacts.map((contact) => (
            <ContactItem key={contact.id} user={contact} />
          ))
        ) : (
          <p>There is no contacts yet!</p>
        )}
      </div>
    </div>
  );
};

export default ContactsList;
