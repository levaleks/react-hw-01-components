import React from 'react';
import { Avatar, Name, Status, Wrapper, Item, List } from './Friends.sc';

export const Friends: React.FC<any> = ({ friends }) => {
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
