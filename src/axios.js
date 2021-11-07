import axios from "axios";

const instance = axios.create 
(
    {
        baseUrl : 'http://localhost:5001/fir-b091f/us-central1/api'
    }
);

export default instance;