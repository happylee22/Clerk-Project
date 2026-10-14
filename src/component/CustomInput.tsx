import { Controller } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
type CustomInputProps = {
  // custom fields
  control: any;
  name: string;
} & TextInputProps;

const CustomInput = ({ control, name, ...props }: CustomInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View style={styles.container}>
          <TextInput
            {...props}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={[styles.input, props.style]}
          />
          <Text style={styles.error}>{error?.message}</Text>
        </View>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  error: {
    color: "crimson",
    fontSize: 12,
    marginTop: 4,
  },
});
