import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export async function createUser(email: string, password: string): Promise<string> {
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.uid;
  } catch (error: any) {

    console.log(error.message);

    if (error.code === "auth/email-already-in-use") {
      throw new Error("This email is already in use.");
    } else if (error.code === "auth/invalid-email") {
      throw new Error("The email address is invalid.");
    } else if (error.code === "auth/weak-password") {
      throw new Error("The password is too weak.");
    } else if (error.code === "auth/missing-password") {
        throw new Error("Password is required.");
    }

    throw new Error(error.message || "Failed to create user.");
  }
}

export async function signOut() {
    await auth.signOut();
}

export async function login(email: string, password: string): Promise<string> {
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.uid;
  } catch (error: any) {
    console.error("Login error:", error);

    switch (error.code) {
      case "auth/user-not-found":
        throw new Error("No user found with this email.");
      case "auth/wrong-password":
        throw new Error("Incorrect password.");
      case "auth/invalid-email":
        throw new Error("Invalid email format.");
      case "auth/too-many-requests":
        throw new Error("Too many attempts. Try again later.");
      default:
        throw new Error("Login failed. Please try again.");
    }
  }
}
