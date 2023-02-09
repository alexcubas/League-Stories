import axios from "axios";

export async function getDataById(summonerId: string) {
    const token = process.env.NEXT_PUBLIC_LOL_KEY;
    const url = process.env.NEXT_PUBLIC_LOL_URL;
    const idSummoner = process.env.NEXT_PUBLIC_LOL_PLAYER_DATA;
    try {
        const dataSummoner = await axios.get(
            `${url}${idSummoner}${summonerId}?api_key=${token}`
        );
        const summoner = dataSummoner.data;
        console.log("entrou aq", dataSummoner, summonerId);
        return summoner;
    } catch (error) {
        console.error(error);
    }
}
