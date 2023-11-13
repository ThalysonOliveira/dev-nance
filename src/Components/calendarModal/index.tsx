import { TouchableWithoutFeedback } from "react-native";
import {
  ButtonFilter,
  ButtonFilterText,
  Container,
  ModalContent,
} from "./styles";
import { View } from "react-native";
import { useState } from "react";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { ptBR } from "./localeConfig";
import { MarkedDates } from "react-native-calendars/src/types";
import { format } from "date-fns";

type CalendarModalProps = {
  setVisibleModal: () => void;
  setNewDate: (date: any) => void;
};

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export function CalendarModal({
  setVisibleModal,
  setNewDate,
}: CalendarModalProps) {
  const [dateNow, setDateNow] = useState("");
  const [markedDates, setMarkedDates] = useState<MarkedDates>({});

  function handleOnDayPress(date: DateData) {
    const markedDay: MarkedDates = {};

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: "#3B3DBF",
      textColor: "#FFFFFF",
    };

    const [dateValue] = Object.keys(markedDay);

    setDateNow(format(new Date(dateValue), "dd/MM/yyyy"));

    setMarkedDates(markedDay);
  }

  function handleSetNewDate() {
    setVisibleModal();
    setNewDate(dateNow);
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={setVisibleModal}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markedDates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: "#FF0000",
            selectedDayBackgroundColor: "#00ADF5",
            selectedDayTextColor: "#FFFFFF",
          }}
        />

        <ButtonFilter onPress={handleSetNewDate}>
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  );
}
