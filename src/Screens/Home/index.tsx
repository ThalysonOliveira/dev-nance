import { useQuery } from "react-query";
import {
  BalanceItem,
  CalendarModal,
  Header,
  HistoryList,
  HistoryListProps,
} from "../../Components";
import { Area, Background, List, ListBalance, Tittle } from "./styles";
import { ApiConfig } from "../../Services";
import { useState } from "react";
import { getCurrentDate } from "../../utils";
import { TouchableOpacity, Modal } from "react-native";
import Feather from "react-native-vector-icons/Feather";

type Balance = {
  saldo: number;
  tag: string;
};

export default function Home() {
  const [listBalance, setListBalance] = useState<Balance[]>([]);
  const [historyList, setHistoryList] = useState<HistoryListProps[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [date, setDate] = useState(getCurrentDate());

  useQuery({
    queryKey: "getBalances",
    queryFn: async () => {
      const { data } = await ApiConfig.get<Balance[]>("/balance", {
        params: {
          date: getCurrentDate(),
        },
      });
      setListBalance(data);
    },
  });

  useQuery({
    queryKey: "getHistoryList",
    queryFn: async () => {
      const { data } = await ApiConfig.get<HistoryListProps[]>("/receives", {
        params: {
          date,
        },
      });

      setHistoryList(data);
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

      <Area>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Feather name="calendar" color={"#121212"} size={30} />
        </TouchableOpacity>
        <Tittle>Ultimas movimentações</Tittle>
      </Area>

      <List
        data={historyList}
        renderItem={({ item }: any) => (
          <HistoryList type={item.type} value={item.value} id={item.id} />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisibleModal={() => setModalVisible(false)}
          setNewDate={(item) => setDate(item)}
        />
      </Modal>
    </Background>
  );
}
