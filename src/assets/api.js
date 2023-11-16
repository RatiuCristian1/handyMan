import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, getDocs, getDoc } from "firebase/firestore/lite";
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

const productsCollectionRef = collection(db, "products")
const storage = getStorage(app);

export async function getProducts() {
  try {
    const snapshot = await getDocs(productsCollectionRef);
    const products = snapshot.docs.map(async (doc) => {
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

    const resolvedProducts = await Promise.all(products);
    console.log("Products Data:", resolvedProducts);

    return resolvedProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

// export async function getProductById(id) {
//   const docRef = doc(db, "products", id)
//   const snapshot = await getDoc(docRef)
//   const caravanData = snapshot.data();
  
//   // Check if there's an imagePath property
//   if (caravanData.imagePath) {
//       const imageRef = ref(storage, caravanData.imagePath);

//       try {
//           const imageUrl = await getDownloadURL(imageRef);
//           return { ...caravanData, id: snapshot.id, imageUrl };
//       } catch (error) {
//           console.error('Error fetching image URL:', error);
//       }
//   }

//   return { ...caravanData, id: snapshot.id };
// }

export async function getProductById(id) {
  try {
      const docRef = doc(db, "products", id);
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
          const productData = snapshot.data();

          if (productData.imagePath) {
              const imageRef = ref(storage, productData.imagePath);

              try {
                  const imageUrl = await getDownloadURL(imageRef);
                  console.log("Image URL:", imageUrl);
                  return { ...productData, id: snapshot.id, imageUrl };
              } catch (error) {
                  console.error('Error fetching image URL:', error);
              }
          }

          return { ...productData, id: snapshot.id };
      }
      console.log("Document does not exist");
      return null;
  } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
  }
}