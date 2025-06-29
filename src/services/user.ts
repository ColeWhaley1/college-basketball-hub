import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function createUser(email: string, password: string): Promise<string> {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.uid;
}

