import { Balance, Container, Label } from "./styles";

type BalanceProps = {
  saldo: number;
  tag: keyof typeof labelOptions;
};

const labelOptions = {
  saldo: {
    label: "Saldo atual",
    color: "#3B3DBF",
  },
  receita: {
    label: "Entradas de hoje",
    color: "#00B94A",
  },
  despesa: {
    label: "Saídas de hoje",
    color: "#EF463A",
  },
};

export function BalanceItem({ saldo, tag }: BalanceProps) {
  return (
    <Container backgroundColor={labelOptions[tag].color}>
      <Label>{labelOptions[tag].label}</Label>
      <Balance>R$: {saldo}</Balance>
    </Container>
  );
}
