import axios, { AxiosInstance } from 'axios';
import { mockStatsAPI } from './mockStatsAPI';

export type StatsRecord = {
    id: string;
    label: string;
    percentage: number;
};

export class StatsAPI {
    constructor(private httpClient: AxiosInstance) {}

    async getStats(): Promise<StatsRecord[]> {
        const {
            data: { stats },
        } = await this.httpClient.get('/stats');

        return stats;
    }
}

const axiosInstance = axios.create();

mockStatsAPI(axiosInstance);

export const statsAPI = new StatsAPI(axiosInstance);
