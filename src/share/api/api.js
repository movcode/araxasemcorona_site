import axios from 'axios';
import StorageKeys from './storageKeys';

const local = "http://localhost:3001/";
const prod = "https://www.araxasemcorona.com.br/rest/";

const dev = false;

const BASE_URL = dev ? local : prod;
const URL_API = `${BASE_URL}api/`;

const headerAuth = () => ({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(StorageKeys.token)}`
    }
})

export default ({
    url: {
        base: BASE_URL,
        login: `${URL_API}user/auth`,
        verifyToken: `${URL_API}user/token`,
        sector: `${URL_API}sector`,
        categorie: `${URL_API}categorie`,
        establishment: `${URL_API}establishment`,
        auth_establishment: `${URL_API}auth/establishment`,
        deliveryman: `${URL_API}deliveryman`,
        deliverymans: `${URL_API}deliverymans`,
        user: `${URL_API}user`,
        icons_sectors: `${URL_API}icons`,
        approved: `${URL_API}establishment/approved`,
        not_approved: `${URL_API}establishment/approved/`,
        config: `${URL_API}config`,
        client: `${URL_API}client`,
        upload: `${URL_API}image/upload`,
        upload_icon: `${URL_API}image/sector`,
        contact: `${URL_API}contact`,
    },

    post: async (url, params, header) =>
        await axios.post(url, params, header && headerAuth()),

    get: async (url, header) => await axios.get(url, header && headerAuth()),


    remove: async (url, id, header) =>
        await axios.delete(`${url}/${id}`, header && headerAuth()),

    put: async (url, id, params, header) =>
        await axios.put(`${url}/${id}`, params, header && headerAuth()),

    upload: async (url, file) => {
        const formData = new FormData();
        formData.append('file', file)
        return await axios.post(url, formData, false);
    }
})

