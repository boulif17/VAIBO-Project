// auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from \
firebase/auth\;
import app from \./firebase\;

const auth = getAuth(app);

// إنشاء حساب جديد
export const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// تسجيل الدخول
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
