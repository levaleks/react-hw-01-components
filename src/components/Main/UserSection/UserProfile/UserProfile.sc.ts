import styled from 'styled-components';

export const Profile = styled.div`
    --color-big-stone: #122236;
    --color-regent-gray: #82909e;
    --color-mystic: #e4e9f0;

    display: flex;
    flex-direction: column;
    width: 250px;
    height: 330px;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    font-family: sans-serif;
`;

/**
 * Description
 */

export const Description = styled.div`
    padding: 30px 20px;
    text-align: center;

    > * {
        margin-bottom: 0;
    }
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const Name = styled.p`
    margin-top: 23px;
    font-size: 19px;
    color: var(--color-big-stone);
`;

export const Tag = styled.p`
    margin-top: 9px;
    font-size: 12px;
    color: var(--color-regent-gray);
`;

export const Location = styled.p`
    margin-top: 12px;
    font-size: 13px;
    color: var(--color-regent-gray);
`;

/**
 * Stats
 */

export const StatsList = styled.ul`
    display: flex;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    border-top: 1px solid var(--color-mystic);
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
    background: #f3f6f9;
    border-right: 1px solid var(--color-mystic);

    &:last-child {
        border-right: none;
    }
`;

export const Label = styled.span`
    font-size: 12px;
    color: var(--color-regent-gray);
`;

export const Quantity = styled.span`
    margin-top: 4px;
    font-size: 16px;
    color: var(--color-big-stone);
    font-weight: bold;
`;
