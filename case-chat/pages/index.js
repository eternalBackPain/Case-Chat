import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [rtfContent, setRtfContent] = useState("");

  const handleFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleRTFRead = (e) => {
    e.preventDefault();
    console.log("reading contents...");
    const reader = new FileReader();
    reader.onloadend = (e) => {
      if (e.target.result) {
        setRtfContent(e.target.result);
        console.log("contents read!");
      }
    };
    reader.readAsText(file);
  };

  const handleQuestion = (e) => {
    e.preventDefault();
    console.log("submitted question");
  };

  return (
    <>
      <Head>
        <title>CaseChat</title>
        <meta name="description" content="Chat-box for Australian cases" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <form onSubmit={handleRTFRead}>
            <input type="file" onChange={handleFileChange} accept=".rtf" />
            <button type="submit">Read RTF</button>
          </form>
        </div>
        <div>
          <form onSubmit={handleQuestion}>
            <textarea value={question} onChange={handleQuestionChange} />
            <button type="submit">Ask question!</button>
          </form>
        </div>
        <div>
          <p>{rtfContent}</p>
        </div>
      </main>
    </>
  );
}
