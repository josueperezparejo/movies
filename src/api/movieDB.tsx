import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        language: 'es-ES',
        api_key: 'ca3a1597150c22009040b20b54fb65f0'
    }
})

export default movieDB