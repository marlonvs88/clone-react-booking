import styled from "styled-components";

export const HotelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;
export const HotelWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
`;
export const BookNow = styled.button`
    position: absolute;
    top: 10px;
    right: 0;
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;
export const HotelImgWrapper = styled.div`
    width: 33%;
`;
export const HotelImg = styled.img`
        width: 100%;
    object-fit: cover;
    cursor: pointer;
`;
export const HotelTitle = styled.h1`
    font-size: 24px;
`;
export const HotelAdrres = styled.div`
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
`;
export const HotelDistance = styled.span`
    color: #0071c2;
    font-weight: 500;
`;
export const HotelStreetName = styled.span`
font-size: 18px;
`;
export const HotelPriceHighLight = styled.span`
    color: #008009;
    font-weight: 500;
`;
export const HotelImages  = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const hotelImgWrapper = styled.div`
    width: 33%;
`;
export const HotelDetails  = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
`;
export const HotelDetailsTexts  = styled.div`
    flex: 3;  
`;
export const HotelDetailsPrice  = styled.div`
    flex: 1;
    background-color: #ebf3ff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const HotelDesc  = styled.p`
    font-size: 14px;
    margin-top: 20px;
`;
export const HotelDetailsPriceTitle1  = styled.span`
    font-size: 18px;
`;
export const HotelDetailsPriceSpan  = styled.span`
    font-size: 18px;
`;
export const HotelDetailsPriceTitle2  = styled.span`
    font-size: 18px;
`;
export const HotelDetailsPriceButton  = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;