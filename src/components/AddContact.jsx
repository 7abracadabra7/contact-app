import { createContext, useContext, useState } from "react";
import ContactsList from "./ContactsList";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddContact.module.css";
import Swal from "sweetalert2";

export const contactContext = createContext();
const AddContact = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    number: "",
  });

  const [edit, setEdit] = useState(false);
  const [contactId, setContactId] = useState(0);
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const deleteHandler = (id, type) => {
    // const Swal = require("sweetalert2");
    if (type !== "update") {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          const newContacts = contacts.filter((contact) => contact.id !== id);
          setContacts(newContacts);
        }
      });
    } else {
      const newContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(newContacts);
    }

    console.log("after delete", contacts);
  };

  const editHandler = (id) => {
    setEdit(true);
    console.log(id);
    setContactId(id);
    const contactToEdit = contacts.find((contact) => contact.id === id);
    console.log("contact to edit", contactToEdit);
    if (contactToEdit) {
      setContact({
        id: id,
        name: contactToEdit.name,
        lastname: contactToEdit.lastname,
        fullname:
          contactToEdit.name +
          " " +
          contactToEdit.lastname +
          " " +
          contactToEdit.email,
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

  const updateContactHandler = () => {
    console.log(contactId);
    const before = [];
    const targetContact = [];
    const after = [];
    let flag = false;
    contacts.map((cntct) => {
      if (cntct.id !== contactId && !flag) {
        before.push(cntct);
      } else if (cntct.id === contactId && !flag) {
        flag = true;
        deleteHandler(contactId, "update");

        targetContact.push({
          contact,
          id: contactId,
          fullname: contact.name + " " + contact.lastname + " " + contact.email,
        });
        console.log("new", targetContact);
      } else if (flag == true) {
        after.push(cntct);
      }
    });
    setContacts([...before, contact, ...after]);

    setContact({
      id: "",
      name: "",
      lastname: "",
      fullname: "",
      email: "",
      number: "",
    });
    setEdit(false);
  };

  const addContactHandler = () => {
    Swal.fire({
      title: "Do you want to add this contact?",
      // showDenyButton: true,c
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const contactId = uuidv4();
        const newContact = {
          ...contact,
          id: contactId,
          fullname: contact.name + " " + contact.lastname + " " + contact.email,
        };
        if (
          newContact.name == "" ||
          newContact.email == "" ||
          newContact.number == ""
        ) {
          setError({
            error: true,
            message: "Please fill the inputs",
          });
        } else if (
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            newContact.email
          ) == false
        ) {
          setError({
            error: true,
            message: "please enter a valid email",
          });
        } else {
          setContacts((contacts) => [...contacts, newContact]);
          setError({
            error: false,
            message: "",
          });
          setContact({
            id: "",
            name: "",
            lastname: "",
            fullname: "",
            email: "",
            number: "",
          });
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
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

        {!edit && (
          <button className={styles.addBtn} onClick={addContactHandler}>
            Add Contact
          </button>
        )}
      </div>
      {error && <div className={styles.messageContainer}>{error.message}</div>}
      <contactContext.Provider value={{ contacts, deleteHandler, editHandler }}>
        <ContactsList />
      </contactContext.Provider>
    </div>
  );
};

export default AddContact;
