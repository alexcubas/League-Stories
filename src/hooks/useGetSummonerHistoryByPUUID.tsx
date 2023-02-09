import axios from "axios";

export async function getSummonerHistoryByPUUID(summonerPUUID: string) {
    const token = process.env.NEXT_PUBLIC_LOL_KEY;
    const url = process.env.NEXT_PUBLIC_LOL_MATCH;
    const idSummoner = process.env.NEXT_PUBLIC_LOL_HISTORY_PLAYER_DATA;

    try {
        const dataSummoner = await axios.get(
            `${url}${idSummoner}by-puuid/${summonerPUUID}/ids?type=ranked&start=0&count=5&api_key=${token}`
        );
        let matchID = dataSummoner.data;

        return matchID;
    } catch (error) {
        console.error(error);
    }
}
