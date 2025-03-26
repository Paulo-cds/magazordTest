import axios from "axios";

const API_URL = "https://api.github.com/users";

export const handleGetUserDataService = async (name: string) => {
    try {
        const response = await axios.get(`${API_URL}/${name}`)
        //     , {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //     },
        // });
        return response.data
    } catch (error) {
        console.error(error);
        return error
    }
};