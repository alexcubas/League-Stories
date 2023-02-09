import axios from "axios";
import { MatchType } from "../types/matchType";

export async function getSummonerHistoryByMatchID(MatchID: string[]) {
    const token = process.env.NEXT_PUBLIC_LOL_KEY;
    const url = process.env.NEXT_PUBLIC_LOL_MATCH;
    const idSummoner = process.env.NEXT_PUBLIC_LOL_HISTORY_PLAYER_DATA;

    try {
        const promises = MatchID.map((matchById) => {
            const API_URL = `${url}${idSummoner}${matchById}?api_key=${token}`;
            return axios.get(API_URL);
        });
        const responses = await Promise.all(promises);
        const matchDataArray: MatchType[] = responses.map(
            (response) => response.data.info
        );
        return matchDataArray;
    } catch (error) {
        console.error(error);
    }
}
