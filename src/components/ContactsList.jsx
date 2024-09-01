/* eslint-disable react/prop-types */
import ContactItem from "./ContactItem";
import Search from "./Search";
import styles from "./ContactsList.module.css";
import { useEffect, useState } from "react";
import { searchContacts } from "../helper/filterContacts";

const ContactsList = ({ contacts, onDelete, onEdit }) => {
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);
  console.log("contacts", contacts);
  console.log("filter", filteredContacts);
  const searchHandler = (name) => {
    console.log("your searched value", name);
    const displayedContacts = searchContacts(contacts, name);
    setFilteredContacts(displayedContacts);
    console.log("hello", filteredContacts);
  };

  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      <div className={styles.contacts}>
        {contacts.length > 0 ? <Search searchHandler={searchHandler} /> : ""}
        {contacts.length ? (
          filteredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        ) : (
          <p>There is no contacts yet!</p>
        )}
      </div>
    </div>
  );
};

export default ContactsList;
