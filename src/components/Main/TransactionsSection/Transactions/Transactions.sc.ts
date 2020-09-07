import styled from 'styled-components';

export const Table = styled.table`
    --color-white: #ffffff;
    --color-egg-blue: #00bcd4;
    --color-mystic: #ecf2f3;
    --color-shuttle-gray: #5c6975;
    --color-geyser: #e0e6e7;

    width: 100%;
    text-align: center;
    font-family: sans-serif;
    background: var(--color-white);
    border-radius: 3px;
    overflow: hidden;
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 0;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);

    tr {
        height: 50px;
    }

    th,
    td {
        border-right: thin solid var(--color-geyser);

        &:last-child {
            border-right: none;
        }
    }

    thead tr {
        color: var(--color-white);
        font-size: 13px;
        text-transform: uppercase;
        background: var(--color-egg-blue);
    }

    tbody tr {
        font-weight: 100;
        color: var(--color-shuttle-gray);

        td:first-child {
            text-transform: capitalize;
        }

        &:nth-child(even) {
            background: var(--color-mystic);
        }
    }
`;
