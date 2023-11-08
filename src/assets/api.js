import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv6pTXZl4vGp9DBLszmXbfUsK0iRY_c7U",
  authDomain: "handyman-87bc0.firebaseapp.com",
  projectId: "handyman-87bc0",
  storageBucket: "handyman-87bc0.appspot.com",
  messagingSenderId: "984803754025",
  appId: "1:984803754025:web:13b9c5c7a97aa179ee5c38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "products")
const storage = getStorage(app);

export async function getVans() {
  try {
    const snapshot = await getDocs(vansCollectionRef);
    const vans = snapshot.docs.map(async (doc) => {
      const data = doc.data();
      const imageUrl = data.imagePath; // Use the GCS URL

      // Convert GCS URL to publicly accessible URL
      const imageRef = ref(storage, imageUrl);
      const publicUrl = await getDownloadURL(imageRef);

      return {
        ...data,
        id: doc.id,
        imageUrl: publicUrl, // Updated imageUrl with publicly accessible URL
      };
    });

    const resolvedVans = await Promise.all(vans);
    console.log("Vans Data:", resolvedVans);

    return resolvedVans;
  } catch (error) {
    console.error("Error fetching vans:", error);
    throw error;
  }
}