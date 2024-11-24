import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080/api/alumni' });

export const searchAlumni = (data) => API.post('/search', data);
export const registerAlumni = (data) => API.post('/register', data);
export const loginAlumni = (data) => API.post('/login', data);
