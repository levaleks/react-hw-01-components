import styled from 'styled-components';

export const Wrapper = styled.section`
    --color-white: #ffffff;
    --color-black: #000000;
    --color-cucumber: #76ab5c;
    --color-flame: #d65643;

    width: 400px;
    font-family: sans-serif;
    background: var(--color-white);
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    margin: 0;
    max-height: 400px;
    padding: 10px;
    color: var(--color-white);

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin-top: 15px;
    padding: 8px 15px;
    color: var(--color-black);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.75);

    &:first-child {
        margin-top: 0;
    }
`;

export const Status = styled.span`
    width: 25px;
    height: 25px;
    background: ${({ isOnline }): string => (isOnline ? 'var(--color-cucumber)' : 'var(--color-flame)')};
    border-radius: 50%;
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 15px;
    border-radius: 10px;
`;

export const Name = styled.p`
    margin: 0 0 0 20px;
    font-size: 32px;
`;
