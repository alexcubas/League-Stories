import axios from "axios";

const token = process.env.NEXT_PUBLIC_LOL_KEY;
const url = process.env.NEXT_PUBLIC_LOL_URL;

export const api = axios.create({
    baseURL: url,
    headers: {
        Origin: "https://developer.riotgames.com",
        "X-Riot-Token": token,
    },
});
