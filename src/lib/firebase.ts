import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { env } from "~/env";

const firebaseConfig = {
  apiKey: env.VITE_ENV_API_KEY,
  authDomain: env.VITE_ENV_AUTH_DOMAIN,
  databaseURL: env.VITE_ENV_DATABASE_URL,
  projectId: env.VITE_ENV_PROJECT_ID,
  storageBucket: env.VITE_ENV_STORAGE_BUCKET,
  messagingSenderId: env.VITE_ENV_MESSAGING_SENDER_ID,
  appId: env.VITE_ENV_APP_ID,
  measurementId: env.VITE_ENV_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
