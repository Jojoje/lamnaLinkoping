"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { FaqAccordion } from "./faq";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>
          <h1>
            Joakim Nilsson lämnar Linköping för att flytta hem till Falun
          </h1>
          <p>
            Du är härmed bjuden till ett litet hej då-/ses senare jippo hemma hos Joakim.
            Joakim vill bara hinna med att träffa så många som möjligt innan avståndet blir lite längre.
            Så oavsett om du träffar Joakim ofta eller inte sett honom på många år så vill Joakim att du kommer! 
            Kom för fem minuter eller stanna många timmar.
          </p>
        </div>

        

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anmäl dig här!
          </a>
          
        </div>

        <FaqAccordion/>
      </main>
      
    </div>
  );
}
