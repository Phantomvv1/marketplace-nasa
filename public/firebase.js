import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBSl0V-kwNywKpV9FIyizd22KIsIpK591Q",
  authDomain: "marketplaceforscience-a8a2b.firebaseapp.com",
  projectId: "marketplaceforscience-a8a2b",
  storageBucket: "marketplaceforscience-a8a2b.appspot.com",
  messagingSenderId: "408838598446",
  appId: "1:408838598446:web:26e6638ed3202d0a0a94bf",
  measurementId: "G-WBCN8LY346"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);