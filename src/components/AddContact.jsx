import { useState } from "react";
import ContactsList from "./ContactsList";
import { v4 as uuidv4 } from "uuid";

const AddContact = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    number: "",
  });
  const changeInputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addContactHandler = () => {
    const contactId = uuidv4();
    console.log(contactId);
    const newContact = { ...contact, id: contactId };
    console.log(newContact, "new");
    setContacts((contacts) => [...contacts, newContact]);
    console.log(contacts);
    setContact({
      id: "",
      name: "",
      lastname: "",
      email: "",
      number: "",
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={changeInputHandler}
        value={contact.name}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastname"
        onChange={changeInputHandler}
        value={contact.lastname}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={changeInputHandler}
        value={contact.email}
      />
      <input
        type="number"
        placeholder="Phone Number"
        name="number"
        onChange={changeInputHandler}
        value={contact.number}
      />
      <button onClick={addContactHandler}>Add Contact</button>
      <ContactsList contacts={contacts} />
    </div>
  );
};

export default AddContact;
