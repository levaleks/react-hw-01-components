import React, { useEffect, useState } from 'react';
import { TransactionRecord, transactionsAPI } from './transactions-api/TransactionsAPI';
import { Transactions } from './Transactions';
import { MainSection, MainSectionContent, MainSectionHeading } from '../Main.sc';

export const TransactionsSection: React.FC = () => {
    const [transactions, setTransactions] = useState<TransactionRecord[]>();

    useEffect(() => {
        const getTransactions = async (): Promise<void> => {
            const transactionsList = await transactionsAPI.getTransactions();

            setTransactions(transactionsList);
        };

        getTransactions();
    }, []);

    return (
        <MainSection>
            <MainSectionHeading>Transactions history</MainSectionHeading>

            <MainSectionContent bg="#ffffff">
                {transactions && <Transactions items={transactions} />}
            </MainSectionContent>
        </MainSection>
    );
};
