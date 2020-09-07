import React, { useEffect, useState } from 'react';
import { User, userAPI } from './user-api/UserAPI';
import { UserProfile } from './UserProfile';
import { MainSection, MainSectionContent, MainSectionHeading } from '../Main.sc';

export const UserSection: React.FC = () => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const getRandomUser = async (): Promise<void> => {
            const userData = await userAPI.getRandomUser();

            setUser(userData);
        };

        getRandomUser();
    }, []);

    return (
        <MainSection>
            <MainSectionHeading>Social profile</MainSectionHeading>

            <MainSectionContent bg="#e7ebf1">
                {user && (
                    <UserProfile
                        avatar={user.avatar}
                        location={user.location}
                        name={user.name}
                        stats={user.stats}
                        tag={user.tag}
                    />
                )}
            </MainSectionContent>
        </MainSection>
    );
};
