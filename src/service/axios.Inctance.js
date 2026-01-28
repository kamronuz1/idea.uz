import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://6960d174e7aa517cb797317e.mockapi.io/api/products",
    headers: {
        "Content-Type" : "application/json"
    }
})
export default axiosInstance