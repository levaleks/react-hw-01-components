import React from 'react';
import { UserSection } from '../Main/UserSection';
import { Main, MainHeading } from '../Main';

export const App: React.FC = () => {
    return (
        <Main>
            <MainHeading>Homework 01 – Components</MainHeading>
            <UserSection />
        </Main>
    );
};
