import axios, { AxiosInstance } from 'axios';
import { mockFriendsAPI } from './mockFriendsAPI';

export type FriendRecord = {
    id: string;
    avatar: string;
    name: string;
    isOnline: boolean;
};

export class FriendsAPI {
    constructor(private httpClient: AxiosInstance) {}

    async getFriends(): Promise<FriendRecord[]> {
        const {
            data: { friends },
        } = await this.httpClient.get('/friends');

        return friends;
    }
}

const axiosInstance = axios.create();

mockFriendsAPI(axiosInstance);

export const friendsAPI = new FriendsAPI(axiosInstance);
