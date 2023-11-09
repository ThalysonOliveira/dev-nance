import styled from "styled-components/native";

export const Container = styled.View<{ backgroundColor: string }>`
    background-color: ${props => props.backgroundColor};
    margin: 14px;
    border-radius: 4px;
    justify-content: center;
    align-items: flex-start;
    width: 300px;
    padding-left: 14px;
`

export const Label = styled.Text`
    color: #FFFFFF;
    font-size: 19px;
    font-weight: bold;
`

export const Balance = styled.Text`
    margin-top: 5px;
    font-size: 30px;
    color: #FFFFFF;
`