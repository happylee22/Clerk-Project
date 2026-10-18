import CustomButton from "@/component/CustomBtn";
import CustomInput from "@/component/CustomInput";
import { useSignUp } from "@clerk/expo";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { z } from "zod";

const signUpSchema = z.object({
  email: z.string({ message: "Email is required" }).email(),
  password: z
    .string({ message: "Password is required" })
    .min(8, "Password should be at least 8 characters long"),
});
type SignInField = z.infer<typeof signUpSchema>;
export default function SignUpScreen() {
  const [pendingVerification, setPendingVerification] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const {
    //react hook
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    //defaultValues
  });
  console.log(errors);
  //the data from zod
  //cleark Auth
  const { signUp, fetchStatus } = useSignUp();
  const onSignUp = async (data: SignInField) => {
    if (fetchStatus === "fetching") return;
    setErrorMsg("");

    const { error } = await signUp.password({
      emailAddress: data.email,
      password: data.password,
    });
    if (error) {
      console.log("sign up error", JSON.stringify(error, null, 2));
      setErrorMsg(error.longMessage ?? error.message ?? "Sign up failed");
      return;
    }

    const { error: sendError } = await signUp.verifications.sendEmailCode();
    if (sendError) {
      console.log("send code error", JSON.stringify(sendError, null, 2));
      setErrorMsg(
        sendError.longMessage ?? sendError.message ?? "Could not send code",
      );
      return;
    }

    setPendingVerification(true);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Create An Account</Text>

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
      <CustomButton text={"Sign Up"} onPress={handleSubmit(onSignUp)} />
      <Link href={"/(auth)/sign-in"} style={styles.link}>
        {" "}
        Already Have an Account? Sign In
      </Link>
      {/* <StatusBar style="dark" /> */}
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
