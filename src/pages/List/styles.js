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
    margin-bottom: 10px;
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
