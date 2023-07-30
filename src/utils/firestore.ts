import { collection } from 'firebase/firestore';

import { db } from '~/lib/firebase';

export const locationsCollection = collection(db, 'cylinder-positions');
