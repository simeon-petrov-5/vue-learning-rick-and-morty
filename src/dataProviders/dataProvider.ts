import axios from 'axios';

const API = 'https://rickandmortyapi.com/api'
const emptyResp = {
    info: null,
    results: []
}

export async function getAllEpisodes() {
    try {
        const { data } = await axios.get(`${API}/episode`);
        return data;
    } catch (e) {
        console.error(e);
        return emptyResp;
    }
}

export async function getAllCharacters() {
    try {
        const { data } = await axios.get(`${API}/character`);
        return data;
    } catch (e) {
        console.error(e);
        return emptyResp;
    }
}