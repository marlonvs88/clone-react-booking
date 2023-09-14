import styled, { css } from "styled-components";

export const pList = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;
export const pListItem = styled.div`
    flex:1;
    border-radius: 10px;
    height: 150px;
    overflow: hidden;
    cursor: pointer;
    object-fit: cover;
`;
export const zoomEffect = css`
    transition: transform 0.3s ease-in-out;
    transform-origin: center center;
`;
export const pListImg = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    ${zoomEffect}
        &:hover {
            transform: scale(1.2); 
    }
`;
export const pListTitles = styled.div`
    font-size: 18px; 
`;
export const StyledH1 = styled.h1`
    font-size: 18px;
    font-weight: 600;
`;
export const StyledH2 = styled.h2`
    font-size: 14px;
    font-weight: 300;
`;
