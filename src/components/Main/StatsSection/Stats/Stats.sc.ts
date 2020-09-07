import styled from 'styled-components';

export const Wrapper = styled.section`
    --color-white: #ffffff;
    --color-river-bed: #475965;

    width: 268px;
    font-family: sans-serif;
    background: var(--color-white);
`;

export const Heading = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    margin: 0;
    font-size: 16px;
    color: var(--color-river-bed);
    text-transform: uppercase;
`;

export const List = styled.ul`
    display: flex;
    overflow-x: scroll;
    margin: 0;
    padding: 0;
    color: var(--color-white);

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 67px;
    flex-grow: 1;
    flex-shrink: 0;
    height: 60px;
    background: ${() => `#${Math.floor(Math.random() * (2 ** 24 - 1)).toString(16)}`};
`;

export const Value = styled.span`
    font-size: 18px;
`;

export const Label = styled.span`
    font-size: 12px;

    & + ${Value} {
        margin-top: 6px;
    }
`;
