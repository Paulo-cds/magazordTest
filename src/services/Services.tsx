import axios from "axios";

const API_URL = "https://api.github.com/users";


//Função que busca os dados do usuário pesquisado
export const handleGetUserDataService = async (name: string) => {
    try {
        const response = await axios.get(`${API_URL}/${name}`)
        return response.data
    } catch (error) {
        console.error(error);
        return error
    }
};

//Função que busca os repositórios do usuário pesquisado
export const handleGetUserReposService = async (name: string, page: number) => {
    try {
        const response = await axios.get(`${API_URL}/${name}/repos?page=${page}&per_page=10`)
        return response.data
    } catch (error) {
        console.error(error);
        return error
    }
};


//Função que busca os repositórios favoritos do usuário pesquisado
export const handleGetUserFavoritesService = async (name: string, page: number) => {
    try {
        const response = await axios.get(`${API_URL}/${name}/starred?page=${page}&per_page=10`)
        return response.data
    } catch (error) {
        console.error(error);
        return error
    }
};


//Função que busca o total de repositórios favoritos do usuário pesquisado
export const handleGetTotalFavoritesService = async (name: string) => {
    try {
        const response = await axios.get(`${API_URL}/${name}/starred`)
        return response.data.length
    } catch (error) {
        console.error(error);
        return error
    }
};