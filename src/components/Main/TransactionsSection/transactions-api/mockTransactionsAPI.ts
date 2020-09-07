import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import transactions from './stub-transactions.json';

export const mockTransactionsAPI = (axiosInstance: AxiosInstance): void => {
    const mockAdapter = new MockAdapter(axiosInstance);

    mockAdapter.onGet('/transactions').reply(200, { transactions });
};
