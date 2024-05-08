import axios from "axios";

const instance = axios.create({
  baseURL: 'https://663baaebfee6744a6ea281d5.mockapi.io/',
});
export const getContacs = async () => {
    const responce = await instance.get(`contacts`)
    return (responce)
}
export const addContacs = async (contact) => {
    const responce = await instance.post(`contacts`, contact)
    return (responce)
}
export const deleteContact = async (id) => {
    const responce = await instance.delete(`contacts/${id}`)
    return (responce)
}


