import React, { useEffect, useState } from 'react';
import { StatsRecord, statsAPI } from './stats-api/StatsAPI';
import { Stats } from './Stats';
import { MainSection, MainSectionContent, MainSectionHeading } from '../Main.sc';

export const StatsSection: React.FC = () => {
    const [stats, setStats] = useState<StatsRecord[]>();

    useEffect(() => {
        const getStats = async (): Promise<void> => {
            const statsList = await statsAPI.getStats();

            setStats(statsList);
        };

        getStats();
    }, []);

    return (
        <MainSection>
            <MainSectionHeading>Statistics</MainSectionHeading>

            <MainSectionContent bg="#eff3f6">
                {stats && <Stats title="Upload stats" stats={stats} />}
            </MainSectionContent>
        </MainSection>
    );
};
