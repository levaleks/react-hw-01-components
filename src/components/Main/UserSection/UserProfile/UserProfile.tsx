import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../user-api/UserAPI';
import {
    Profile,
    Description,
    Avatar,
    Name,
    Tag,
    Location,
    StatsList,
    StatsItem,
    Label,
    Quantity,
} from './UserProfile.sc';

type UserProfileProps = User;

export const UserProfile: React.FC<UserProfileProps> = ({
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) => {
    return (
        <Profile>
            <Description>
                <Avatar src={avatar} alt={name} />
                <Name>{name}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <StatsList>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </StatsItem>
            </StatsList>
        </Profile>
    );
};

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
