import axios from "axios";

axios.defaults.baseURL = "https://663baaebfee6744a6ea281d5.mockapi.io/";

export const fetchContacts = async () => {
  const data = await axios.get("/contacts");
  return data;
};

export const addContact = async (newContact) => {
  const data = await axios.post("/contacts", newContact);
  return data;
};

export const deleteContact = async (contactId) => {
  const data = await axios.delete(`/contacts/${contactId}`);
  return data;
};

