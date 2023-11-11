import { useState } from "react";
import { Container, RegisterLabel, RegisterTypeButton } from "./styles";
import Feather from "react-native-vector-icons/Feather";

type TypesEnum = "receita" | "despesa";

type TypesProps = {
  type?: TypesEnum;
  onChangeTypeProp?: (type: TypesEnum) => void;
};

export type RegisterTypeStyle = {
  checked: boolean;
};

export function RegisterTypes({ onChangeTypeProp }: TypesProps) {
  const [checkedReceita, setCheckedReceita] = useState<boolean>(true);
  const [checkedDespesa, setCheckedDespesa] = useState<boolean>(false);

  function changeType({ type }: TypesProps) {
    if (type === "receita") {
      setCheckedReceita(true);
      setCheckedDespesa(false);
      onChangeTypeProp!("receita");
    } else {
      setCheckedReceita(false);
      setCheckedDespesa(true);
      onChangeTypeProp!("despesa");
    }
  }

  return (
    <Container>
      <RegisterTypeButton
        onPress={() => {
          changeType({ type: "receita" });
        }}
        checked={checkedReceita}
      >
        <Feather name="arrow-up" size={25} color={"#121212"} />
        <RegisterLabel>Receita</RegisterLabel>
      </RegisterTypeButton>

      <RegisterTypeButton
        onPress={() => {
          changeType({ type: "despesa" });
        }}
        checked={checkedDespesa}
      >
        <Feather name="arrow-down" size={25} color={"#121212"} />
        <RegisterLabel>Despesa</RegisterLabel>
      </RegisterTypeButton>
    </Container>
  );
}
