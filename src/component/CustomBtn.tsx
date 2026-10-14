import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
type CustomButtonProps = {
  text: string;
  //presableprops
} & PressableProps;
const CustomButton = ({ text, ...Props }: CustomButtonProps) => {
  return (
    <Pressable {...Props} style={[styles.button]}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4353FD",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
