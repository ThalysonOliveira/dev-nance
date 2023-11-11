import { Controller, useForm } from "react-hook-form";
import { Button, ErrorMessage, Input, RegisterTypes } from "../../Components";
import { newRegisterYupResolver } from "../../Schemas";

const style = {
  borderWidth: 1,
  borderColor: "#FF375B",
};

export type TypesEnum = "receita" | "despesa";

type NewFormProps = {
  description: string;
  value: number;
  type: TypesEnum;
};

export default function NewForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewFormProps>({
    resolver: newRegisterYupResolver,
    defaultValues: {
      type: "receita",
    },
  });

  function handleNewForm({ description, value, type }: NewFormProps) {
    console.log({ description, value, type });
  }

  return (
    <>
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <Input
            style={errors.description && style}
            placeholder="Descrição"
            keyboardType="default"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.description && (
        <ErrorMessage>{errors.description.message}</ErrorMessage>
      )}

      <Controller
        control={control}
        name="value"
        render={({ field: { onChange, value } }) => (
          <Input
            style={errors.value && style}
            placeholder="Valor desejado"
            keyboardType="numeric"
            onChangeText={onChange}
            value={value?.toString()}
          />
        )}
      />
      {errors.value && <ErrorMessage>{errors.value.message}</ErrorMessage>}

      <Controller
        control={control}
        name="type"
        render={({ field: { onChange } }) => (
          <RegisterTypes onChangeTypeProp={(type) => onChange(type)} />
        )}
      />
      {errors.type && <ErrorMessage>{errors.type.message}</ErrorMessage>}

      <Button
        activeOpacity={0.8}
        onPress={handleSubmit(handleNewForm)}
        color={"#00B94A"}
      >
        Registrar
      </Button>
    </>
  );
}
