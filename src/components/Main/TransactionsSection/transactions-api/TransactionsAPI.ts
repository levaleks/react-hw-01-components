import axios, { AxiosInstance } from 'axios';
import { mockTransactionsAPI } from './mockTransactionsAPI';

export type TransactionRecord = {
    id: string;
    type: string;
    amount: string;
    currency: string;
};

export class TransactionsAPI {
    constructor(private httpClient: AxiosInstance) {}

    async getTransactions(): Promise<TransactionRecord[]> {
        const {
            data: { transactions },
        } = await this.httpClient.get('/transactions');

        return transactions;
    }
}

const axiosInstance = axios.create();

mockTransactionsAPI(axiosInstance);

export const transactionsAPI = new TransactionsAPI(axiosInstance);
