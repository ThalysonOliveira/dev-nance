import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin: 25px 0 0 15px;
    width: 100%;
    max-height: 60px;
`

export const Title = styled.Text`
    font-size: 22px;
`

export const ButtonMenu = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`