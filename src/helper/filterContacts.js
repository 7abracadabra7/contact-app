const searchContacts = (contacts, search) => {
  if (!search) return contacts;
  const searchedContacts = contacts.filter((contact) =>
    contact.fullname.toLowerCase().includes(search)
  );
  return searchedContacts;
};

export {searchContacts}
