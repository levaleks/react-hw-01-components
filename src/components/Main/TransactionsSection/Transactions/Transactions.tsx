import React from 'react';
import { Table } from './Transactions.sc';
import { TransactionRecord } from '../transactions-api/TransactionsAPI';

type TransactionsProps = {
    items: TransactionRecord[];
};

export const Transactions: React.FC<TransactionsProps> = ({ items }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
