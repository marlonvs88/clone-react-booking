import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;
export const ListWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    gap: 20px;
`;
export const ListSearch = styled.div`
    flex: 1;
    background-color: #febb02;
    padding: 10px;
    border-radius: 10px;
    position: sticky;
    top: 10px;
    height: max-content;
`;
export const ListResult = styled.div`
    flex: 3;
`;
export const LsTitle = styled.h1`
    font-size: 20px;
    color: #555;
    margin-bottom: 10px;
`;
export const LsItem = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: #555;
    margin-bottom: 10px;
`;
export const LsLabel = styled.label`
    font-size: 16px;
    color: #555;
    margin: 10px 0px 5px 0px;
`;
export const LsInput = styled.input`
    height: 30px;
    border: none;
    padding: 5px;
    font-size: 16px;
`;
export const LsSpan = styled.span`
    height: 30px;
    padding: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
`;
export const Options = styled.div`
    margin: 10px;
`;
export const LsOptionItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #555;
    font-size: 12px;
`;
export const LsOptionText = styled.span`
    font-size: 16px;
`;
export const LsOptionInput = styled.input`
    width: 50px;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #0071c2;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: 500;
`;
