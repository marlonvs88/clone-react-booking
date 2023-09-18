import styled from "styled-components";

export const SearchItem = styled.div`
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
`;
export const SearchImg = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`;
export const siDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 2;
`;
export const siTitle = styled.h1`
    font-size: 20px;
    color: #0071c2;
`;
export const siDistance = styled.span`
    font-size: 12px;    
`;
export const siTaxiOp = styled.span`
    font-size: 12px;
    background-color: #008009;
    color: white;
    width: max-content;
    padding: 3px;
    border-radius: 5px;
`;
export const siSubtitle = styled.span`
    font-size: 12px;
    font-weight: bold;
`;
export const siFeatures = styled.span`
    font-size: 12px;
`;
export const siCancelOp = styled.span`
    font-size: 12px;
    color: #008009;
    font-weight: bold;
`;
export const siCancelOpSubtitle = styled.span`
    font-size: 12px;
    color: #008009;
`;
export const siDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const siRating = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const isRatingNote = styled.span`
    font-weight: 500;
`;
export const isRatingButton = styled.button`
    background-color: #003580;
    color: white;
    padding: 5px;
    font-weight: bold;
    border: none;
`;
export const siDetailTexts = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
export const siPrice = styled.span`
    font-size: 24px;
`;
export const siTaxOp = styled.span`
    font-size: 12px;
    color: gray;
`;
export const siCheckButton = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    padding: 10px 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`;
