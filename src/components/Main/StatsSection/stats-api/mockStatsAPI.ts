import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import stats from './stub-stats.json';

export const mockStatsAPI = (axiosInstance: AxiosInstance): void => {
    const mockAdapter = new MockAdapter(axiosInstance);

    mockAdapter.onGet('/stats').reply(200, { stats });
};
