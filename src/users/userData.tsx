import { create } from "zustand";

type User = {
    id: string | number;
    name: string;
    avatar_url: string;
    login: string;
    followers: number;
    following: number;
    bio: string | null;
    company: string | null;
    location: string | null;
    email: string | null;
    html_url: string | undefined;
    twitter_username: string | null;
    blog: string;
    public_repos: number;
}

type UserData = {
    dataProfile : User | null;
    addUser: (user: User) => void;
}

export const useUserData = create<UserData>((set)=>({
    dataProfile:null,
    addUser: (allData) => set(() => ({
        dataProfile:allData
    }))
}))