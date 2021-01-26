import axios from 'axios';

export async function getAllEpisodes() {
    try {
        const { data } = await axios.get('https://rickandmortyapi.com/api/episode');
        return data;
    } catch (e) {
        console.error(e);
        return {
            info: null,
            results: []
        }
    }
}