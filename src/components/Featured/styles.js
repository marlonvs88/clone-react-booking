import styled from "styled-components";

export const Featured = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    z-index: 1;
`;
export const FeaturedItem = styled.div`
    position: relative;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    height: 250px;
`;
export const FeaturedImg = styled.img`
    width: 100%;
    object-fit: cover;
`;
export const FeaturedTitles = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
`;