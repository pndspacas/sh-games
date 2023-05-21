import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "7da84c23d28d4226b4fa42d68b19c6cc"
    }
})