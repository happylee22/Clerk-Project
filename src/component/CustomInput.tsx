import { StyleSheet, TextInput, TextInputProps } from "react-native";
type CustomInputProps = {
  // custom fields
} & TextInputProps;

const CustomInput = (props: CustomInputProps) => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#ccc",
  },
});
