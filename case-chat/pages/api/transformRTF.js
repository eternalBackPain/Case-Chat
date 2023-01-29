import { Configuration, OpenAIApi } from "openai";
import {parseRTF} from "rtf-parser"
import {fs} from "fs"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//OpenAI Config
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Firebase config
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "case-chat-789b3.firebaseapp.com",
  projectId: "case-chat-789b3",
  storageBucket: "case-chat-789b3.appspot.com",
  messagingSenderId: "449829903127",
  appId: "1:449829903127:web:481811fd6a72415544b552",
  measurementId: "G-JK57ESXRKF"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function handler(req, res) {
  console.log("Endpoint called");
  console.log(req.body)
  // res.status(200).json({
  //   parsedRTF: req.body,
  // });
}
