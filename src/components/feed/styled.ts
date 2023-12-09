import styled from "styled-components";

export const FeedRowWrapper = styled.div`
    display: flex;
    width: 600px;
`;

export const IconCell = styled.div`
    width: 100px;
    position: relative;
`
export const VerticalLine = styled.div`
    width: 1px;
    border-right: 1px solid #CCCCCC;
    position: relative;
    left: 70%;
    height: 100%;
`

export const ComponentCell = styled.div`
    width: 100%;
    margin-bottom: 16px;
`;

export const ActionBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const IconWrapper = styled.div`
    position: absolute;
    top: 8px;
    left: 60%;
`;
export const Info = styled.div`
    font-family: 'Roboto';
    font-size: 12px;
    position: absolute;
    top: 12px;
    left: 36%;
`;