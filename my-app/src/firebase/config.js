import { initializeApp } from "firebase/app";// Bu fonksiyon, Firebase'i başlatmak için kullanılır.
import {getAuth} from "firebase/auth"//kimlik doğulama
import {getFirestore} from "firebase/firestore" //veritabenı
import {getStorage} from "firebase/storage" //depolama

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAVT4ngHTq-9JNm3G2eeQ-mynG8XkoqUCQ", //api anahtarı
  authDomain: "eshop-c8cd4.firebaseapp.com", //kimlik doğrulama
  projectId: "eshop-c8cd4", //proje kimliği
  storageBucket: "eshop-c8cd4.appspot.com",
  messagingSenderId: "687398287626",
  appId: "1:687398287626:web:7ba1c86fa714a5c3b8a2f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);//initializeApp fonksiyonu, firebaseConfig objesini parametre olarak alarak Firebase'i başlatır. Bu adım, yapılandırma bilgilerinin kullanılarak Firebase projenin API'larına erişim sağlar.
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)
export default app
