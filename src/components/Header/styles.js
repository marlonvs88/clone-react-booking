import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = styled.div`
    background-color: #003580;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
`;
export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px 100px 0px;

    ${props =>
        props.isList &&
        css`
            margin: 20px 0px 0px 0px;
        `}
`;
export const HeaderList = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 50px;
`;
export const HeaderListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border: 1px solid #003580; 
    padding: 10px;
    border-radius: 20px;

    ${props =>
        props.active &&
        css`
            border: 1px solid white; 
            padding: 10px;
            border-radius: 20px;
        `}

    &:hover {
        background-color: #0071c2; 
        padding: 10px;
        border-radius: 20px;
    }
`;
export const span = styled.span`

`;
export const HeaderTitle = styled.h1`

`;
export const HeaderDesc = styled.p`
    margin: 20px 0;
`;
export const HeaderBtn = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer;
`;
export const HeaderSearch = styled.div`
    display: flex;
    height: 30px;
    background-color: white;
    border: 3px solid #febb02;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0px;
    border-radius: 5px;
    position: absolute;
    bottom: -25px;
    width: 100%;
    max-width: 1024px;
`;
export const ColoredFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${props => props.color || "lightgray"};
`;
export const HeaderSearchItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
export const HeaderSearchInput = styled.input`
    border: none;
    outline: none;
    cursor: pointer;
`;
export const Date = styled.div`
    position: absolute;
    top: 50px;
    z-index: 2;
`;
export const Options = styled.div`
    z-index: 2;
    position: absolute;
    top: 50px;
    background-color: white;
    color: gray;
    border-radius: 5px;
    box-shadow: 0px 0px 10px -5px rgba(0,0,0, 0.4);
`;
export const OptionItem = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;
export const OptionText = styled.span`
    
`;
export const OptionCounter = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: black;
`;
export const OptionCounterButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #0071c2;
    cursor: pointer;
    background-color: white;
`;
export const OptionCounterNunber = styled.span`
    
`;

