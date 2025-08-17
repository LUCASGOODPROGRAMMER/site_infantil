import axios from "axios";

const cardFetch = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "ContentType": "application/json",
    }
})

export default cardFetch