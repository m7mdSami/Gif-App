import axios from 'axios';

export class Service {

    constructor() {
    }

    async header() {
        const headers = {
            'Content-Type': 'application/json; charset=UTF-8'
        }
        return headers;
    }

    async get(url: string, params?: {}) {
        try {
            const response = await axios.get(url, {
                params: params ? { ...params } : null,
                headers: await this.header()
            });
            return response;
        } catch (error) {
            console.log(error)
            this.handleError(error);
        }
    }

    private handleError(error: any) {
        throw error.response.data
    }

}