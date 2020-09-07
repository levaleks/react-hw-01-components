import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import friends from './stub-friends.json';

export const mockFriendsAPI = (axiosInstance: AxiosInstance): void => {
    const mockAdapter = new MockAdapter(axiosInstance);

    mockAdapter.onGet('/friends').reply(200, { friends });
};
