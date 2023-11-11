import { useQuery } from "react-query";
import { BalanceItem, Header } from "../../Components";
import { Background, ListBalance } from "./styles";
import { ApiConfig } from "../../Services";
import { useState } from "react";
import { getCurrentDate } from "../../utils";

type Balance = {
  saldo: number;
  tag: string;
};

export default function Home() {
  const [listBalance, setListBalance] = useState<Balance[]>([]);

  useQuery({
    queryKey: "getBalances",
    queryFn: async () => {
      const { data } = await ApiConfig.get<Balance[]>("/balance", {
        params: {
          date: getCurrentDate,
        },
      });
      setListBalance(data);
    },
  });

  return (
    <Background>
      <Header title="Minhas movimentações" />
      <ListBalance
        data={listBalance}
        renderItem={({ item }: any) => (
          <BalanceItem saldo={item.saldo} tag={item.tag} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </Background>
  );
}
