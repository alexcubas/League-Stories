import axios from "axios";

export async function getProductsByName(summonerName: string) {
    const token = process.env.NEXT_PUBLIC_LOL_KEY;
    const url = process.env.NEXT_PUBLIC_LOL_URL;
    try {
        const dataSummoner = await axios.get(
            `${url}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${token}`
        );
        const summoner = dataSummoner.data;

        return summoner;
    } catch (error) {
        console.error(error);
    }
}
