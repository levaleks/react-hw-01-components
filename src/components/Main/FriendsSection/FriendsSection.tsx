import React, { useEffect, useState } from 'react';
import { FriendRecord, friendsAPI } from './friends-api/FriendsAPI';
import { Friends } from './Friends';
import { MainSection, MainSectionContent, MainSectionHeading } from '../Main.sc';

export const FriendsSection: React.FC = () => {
    const [friends, setFriends] = useState<FriendRecord[]>();

    useEffect(() => {
        const getFriends = async (): Promise<void> => {
            const friendsList = await friendsAPI.getFriends();

            setFriends(friendsList);
        };

        getFriends();
    }, []);

    return (
        <MainSection>
            <MainSectionHeading>Friends list</MainSectionHeading>

            <MainSectionContent bg="#ffffff">{friends && <Friends friends={friends} />}</MainSectionContent>
        </MainSection>
    );
};
