import CustomButton from "@/component/CustomBtn";
import CustomInput from "@/component/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string({ message: "Email is required" }).email(),
  password: z
    .string({ message: "Password is required" })
    .min(8, "Password should be at least 8 characters long"),
});
type SignInField = z.infer<typeof signInSchema>;
export default function SignInScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
    //defaultValues
  });
  console.log(errors);

  const OnSignIn = (data: SignInField) => {
    console.log(data.email, data.password);

    //Maual Validation
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.form}>
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          autoFocus
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry
          name="password"
          control={control}
        />
      </View>
      <CustomButton text={"Sign In"} onPress={handleSubmit(OnSignIn)} />
      <Link href={"/(auth)/sign-up"} style={styles.link}>
        {" "}
        Don't have an account? Sign Up
      </Link>
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
  form: {
    gap: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  link: {
    color: "#4353FD",
    fontWeight: "600",
  },
});
