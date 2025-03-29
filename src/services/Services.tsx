import axios from "axios";
import { Repo } from "../components/typesUse"
const API_URL = "https://api.github.com";
const token = import.meta.env.VITE_TOKEN_GIT;

//Função que busca os dados do usuário pesquisado
export const handleGetUserDataService = async (name: string) => {
  try {
    const response = await axios.get(`${API_URL}/users/${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    console.error(error);
    return error
  }
};


//Função que busca os repositórios por pagina do usuário pesquisado
export const handleGetUserReposService = async (name: string, page: number, language: string, repoName: string) => {
  try {
    const response = await axios.get(`${API_URL}/search/repositories?q=${repoName}+user:${name}+language:${language}&page=${page}&per_page=10`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    console.error(error);
    return error
  }
};



//Função que busca os repositórios favoritos do usuário pesquisado
export const handleGetUserFavoritesService = async (name: string,page:number, language: string, repoName:string) => {
  try {
    const response = await axios.get(`${API_URL}/users/${name}/starred`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if(language.length > 0){
      let repoFilter: Repo[] = []
      repoFilter = repoFilter.concat(response.data.filter((repo: Repo) => repo.language?.toLowerCase() === language.toLowerCase()));
      if(repoName.length > 0){
        let repoNameFilter: Repo[] = []
        repoNameFilter = repoNameFilter.concat(repoFilter.filter((repo: Repo) => repo.name.toLowerCase().includes(repoName.toLowerCase())));
        return repoNameFilter.slice(page*10-10, page*10)
      }
      return repoFilter.slice(page*10-10, page*10)
    }
    if(repoName.length > 0){
      let repoNameFilter: Repo[] = []
      repoNameFilter = repoNameFilter.concat(response.data.filter((repo: Repo) => repo.name.toLowerCase().includes(repoName.toLowerCase())));
      return repoNameFilter.slice(page*10-10, page*10)
    }
    return response.data.slice(page*10-10, page*10)
  } catch (error) {
    console.error(error);
    return error
  }
};


//Função que busca o total de repositórios favoritos do usuário pesquisado
export const handleGetTotalFavoritesService = async (name: string) => {
  try {
    const response = await axios.get(`${API_URL}/users/${name}/starred`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data.length
  } catch (error) {
    console.error(error);
    return error
  }
};


