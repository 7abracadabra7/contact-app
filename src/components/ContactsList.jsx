/* eslint-disable react/prop-types */
import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h3>Contacts List</h3>
      <div className={styles.container}>
        {console.log(contacts)}
        {contacts.length ? (
          contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
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
