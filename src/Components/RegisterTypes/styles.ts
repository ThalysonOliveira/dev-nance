import styled from "styled-components/native";
import { RegisterTypeStyle } from ".";

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;
    align-items: center;
`

export const RegisterTypeButton = styled.TouchableOpacity<RegisterTypeStyle>`
    background-color: ${props => props.checked ? '#FFFFFF' : '#E7E7E7'};
    width: 47%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 45px;
    border-radius: 4px;
    border-width: 1.5px;
    border-color: ${props => props.checked ? '#3B3DBF' : 'transparent'};
    margin-bottom: 14px;
`

export const RegisterLabel = styled.Text`
    margin-left: 8px;
    font-size: 17px;
`
