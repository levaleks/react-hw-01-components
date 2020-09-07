import axios, { AxiosInstance } from 'axios';
import { mockUserAPI } from './mockUserAPI';

export type User = {
    name: string;
    tag: string;
    location: string;
    avatar: string;
    stats: {
        followers: number;
        views: number;
        likes: number;
    };
};

export class UserAPI {
    constructor(private httpClient: AxiosInstance) {}

    async getRandomUser(): Promise<User> {
        const {
            data: { user },
        } = await this.httpClient.get('/randomUser');

        return user;
    }
}

const axiosInstance = axios.create();

mockUserAPI(axiosInstance);

export const userAPI = new UserAPI(axiosInstance);
