import { useState } from "react";
import ContactsList from "./ContactsList";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddContact.module.css";

const AddContact = ({ setShowModal }) => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    number: "",
  });

  let currentId = "";

  const [edit, setEdit] = useState(false);

  const deleteHandler = (id) => {
    console.log("delete", id);
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const editHandler = (id) => {
    setEdit(true);
    const contactToEdit = contacts.find((contact) => contact.id === id);
    console.log(contactToEdit);
    if (contactToEdit) {
      setContact({
        id: id,
        name: contactToEdit.name,
        lastname: contactToEdit.lastname,
        fullname: contactToEdit.name + " " + contactToEdit.lastname,
        email: contactToEdit.email,
        number: contactToEdit.number,
      });
    }
  };

  const changeInputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const updateContactHandler = (id) => {
    deleteHandler(id);

    setContacts((contacts) => [...contacts, contact]);
  };

  const addContactHandler = () => {
    const contactId = uuidv4();
    const newContact = {
      ...contact,
      id: contactId,
      fullname: contact.name + " " + contact.lastname,
    };
    setContacts((contacts) => [...contacts, newContact]);
    setShowModal(true);

    setContact({
      id: "",
      name: "",
      lastname: "",
      fullname: "",
      email: "",
      number: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          onChange={changeInputHandler}
          value={contact.name}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Last Name"
          name="lastname"
          id="lastname"
          onChange={changeInputHandler}
          value={contact.lastname}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          onChange={changeInputHandler}
          value={contact.email}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Phone Number"
          name="number"
          id="number"
          onChange={changeInputHandler}
          value={contact.number}
        />
        {edit && (
          <button className={styles.updateBtn} onClick={updateContactHandler}>
            Update Contact
          </button>
        )}

        <button className={styles.addBtn} onClick={addContactHandler}>
          Add Contact
        </button>
      </div>
      <ContactsList
        contacts={contacts}
        onDelete={deleteHandler}
        onEdit={editHandler}
      />
    </div>
  );
};

export default AddContact;
