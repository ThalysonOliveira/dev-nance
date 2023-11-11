import styled from 'styled-components/native';
import { PropsButtonStyle } from '.';

export const ButtonSubmit = styled.TouchableOpacity<PropsButtonStyle>`
    width: 90%;
    height: 60px;
    border-radius: 8px;
    background-color: ${props => props.color || '#3B3DBF'};
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`

export const TextSubmit = styled.Text`
    font-size: 20px;
    color: #FFFFFF;
`