import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import user from './stub-user.json';

export const mockUserAPI = (axiosInstance: AxiosInstance): void => {
    const mockAdapter = new MockAdapter(axiosInstance);

    mockAdapter.onGet('/randomUser').reply(200, { user });
};
