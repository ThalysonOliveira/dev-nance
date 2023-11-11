import styled from "styled-components/native";
import { HistoryListStyle } from ".";

export const Container = styled.TouchableOpacity`
     padding: 14px;
     background-color: #F0F3FF;
     margin-bottom: 10px;
     width: 90%;
     margin: 10px auto;
     border-radius: 4px;
`

export const TypeContainer = styled.View<HistoryListStyle>`
    width: 120px;
    flex-direction: row;
    gap: 5px;
    height: 40px;
    align-items: center;
    background-color: ${props => props.background === 'receita' ? '#00B94A' : '#EF463A'};
    border-radius: 4px;
    padding: 4px;
    margin-bottom: 5px;
`

export const TypeContainerText = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
`

export const TextContainer = styled.Text`
    font-size: 21px;
    font-weight: bold;
`