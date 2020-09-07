import React from 'react';
import { UserSection } from '../Main/UserSection';
import { Main, MainHeading } from '../Main';
import { StatsSection } from '../Main/StatsSection/StatsSection';

export const App: React.FC = () => {
    return (
        <Main>
            <MainHeading>Homework 01 – Components</MainHeading>
            <UserSection />
            <StatsSection />
        </Main>
    );
};
