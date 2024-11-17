'use server';

import { adminDb } from '@/firebase-admin';
import { db } from '@/firebase';
import { getDocs } from 'firebase/firestore';

export const createNewDocument = async () => {
  const docId = serverTimestamp();
};
