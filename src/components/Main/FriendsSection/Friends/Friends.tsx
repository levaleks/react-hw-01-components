import React from 'react';
import { Avatar, Name, Status, Wrapper, Item, List } from './Friends.sc';

export type FriendsProps = {
    friends: { id: string; avatar: string; name: string; isOnline: boolean }[];
};

export const Friends: React.FC<FriendsProps> = ({ friends }) => {
    return (
        <Wrapper>
            <List>
                {friends.map(({ id, avatar, name, isOnline }) => (
                    <Item key={id}>
                        <Status isOnline={isOnline} />
                        <Avatar src={avatar} alt={name} />
                        <Name>{name}</Name>
                    </Item>
                ))}
            </List>
        </Wrapper>
    );
};
