import { useState } from "react";

const AddContact = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
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
    console.log(contacts);
    setContacts((contacts) => [...contacts, contact]);
    console.log(contacts);
    setContact({
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
    </div>
  );
};

export default AddContact;
