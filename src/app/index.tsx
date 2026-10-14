import CustomButton from "@/component/CustomBtn";
import CustomInput from "@/component/CustomInput";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from "react-native";
export default function Index() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Sign In</Text>
      <CustomInput
        placeholder="Email"
        autoFocus
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
      />
      <CustomInput placeholder="Password" secureTextEntry />
      <CustomButton text={"Sign In"} />
      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
});
