import styled from "styled-components";

export const Wrapper = styled.div<{$selected: boolean}>`
    width: 20px;
    height: 20px;
    border: 1px solid ${props => (!props.$selected ? '#CCCCCC': '#00C6EE')};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => (!props.$selected ? '#ffffff': '#00C6EE')};
    svg {
        width: 16px;
        height: 16px;
        color: ${props => (!props.$selected ? '#bcbcbc': '#ffffff')};
    }
`