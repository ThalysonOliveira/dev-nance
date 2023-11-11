import {
  Container,
  TextContainer,
  TypeContainer,
  TypeContainerText,
} from "./styles";
import Feather from "react-native-vector-icons/Feather";

type TypeEnum = "receita" | "despesa";

export type HistoryListStyle = {
  background: TypeEnum;
};

export type HistoryListProps = {
  type: TypeEnum;
  value: number;
};

export function HistoryList({ type, value }: HistoryListProps) {
  return (
    <Container>
      <TypeContainer background={type}>
        <Feather
          name={type === "receita" ? "arrow-up" : "arrow-down"}
          color={"#FFFFFF"}
          size={30}
        />
        <TypeContainerText>{type}</TypeContainerText>
      </TypeContainer>

      <TextContainer>
        {value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </TextContainer>
    </Container>
  );
}
