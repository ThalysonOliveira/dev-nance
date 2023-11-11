import { useMutation } from "react-query";
import {
  Container,
  TextContainer,
  TypeContainer,
  TypeContainerText,
} from "./styles";
import Feather from "react-native-vector-icons/Feather";
import { ApiConfig } from "../../Services";
import { Alert } from "react-native";

type TypeEnum = "receita" | "despesa";

export type HistoryListStyle = {
  background: TypeEnum;
};

export type HistoryListProps = {
  id: string;
  type: TypeEnum;
  value: number;
};

export function HistoryList({ type, value, id }: HistoryListProps) {
  const deleteMovement = useMutation({
    mutationFn: async (movementId: string) => {
      await ApiConfig.delete("receives/delete", {
        params: {
          item_id: movementId,
        },
      });
    },
  });

  function handleDeleteMovement(movementId: string) {
    Alert.alert(
      "Exclusão do movimento",
      "Deseja realmente excluir este movimento?",
      [
        {
          text: "Cancelar",
          onPress: () => undefined,
          style: "cancel",
        },
        { text: "Confirmar", onPress: () => deleteMovement.mutate(movementId) },
      ]
    );
  }

  return (
    <Container activeOpacity={0.8} onPress={() => handleDeleteMovement(id)}>
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
