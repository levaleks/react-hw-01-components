import React from 'react';
import { Heading, Item, Label, List, Value, Wrapper } from './Stats.sc';
import { StatsRecord } from '../stats-api/StatsAPI';

export type StatsProps = {
    title?: string;
    stats: StatsRecord[];
};

export const Stats: React.FC<StatsProps> = ({ title, stats }) => {
    return (
        <Wrapper>
            {title && <Heading>{title}</Heading>}
            <List>
                {stats.map(({ id, label, percentage }) => (
                    <Item key={id}>
                        <Label>{label}</Label>
                        <Value>{percentage}</Value>
                    </Item>
                ))}
            </List>
        </Wrapper>
    );
};
