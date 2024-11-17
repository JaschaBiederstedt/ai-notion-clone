import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'ai-notion-clone-27b67.firebaseapp.com',
  projectId: 'ai-notion-clone-27b67',
  storageBucket: 'ai-notion-clone-27b67.firebasestorage.app',
  messagingSenderId: '770548423335',
  appId: '1:770548423335:web:57ce9ea3494b5214725982',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
