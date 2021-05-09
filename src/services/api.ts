export const APIs = (param?: any) => {

    const BASE_URL = 'https://g.tenor.com/v1';
    const API_KEY = "LIVDSRZULELA";
    const API = {
        search          : `${BASE_URL}/search?key=${API_KEY}`,
        trending        : `${BASE_URL}/trending?key=${API_KEY}`,
        categories      : `${BASE_URL}/categories?key=${API_KEY}`,
    }
    return API;
}
