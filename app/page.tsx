"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { FaqAccordion } from "./faq";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.introSection}>
          <Image
            className={styles.logo}
            src="/moving_map.png"
            alt="Joakim on a moving van"
            width={747}
            height={1107}
            priority
          />
          <div className={styles.textContent}>
            <h1>Joakim Nilsson lämnar Linköping för att flytta hem till Falun</h1>
            <p>
              Du är härmed bjuden till ett litet hej då-/ses senare jippo hemma hos Joakim.
              Joakim vill bara hinna med att träffa så många som möjligt innan avståndet blir lite längre.
              Så oavsett om du träffar Joakim ofta eller inte sett honom på många år så vill Joakim att du kommer! 
              Kom för fem minuter eller stanna många timmar.
            </p>
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anmäl dig här!
            </a>
          </div>
        </div>

        <div className={styles.columnsSection}>
          <div className={styles.column}>
            <h2>My time in Linköping</h2>
            <p>A summary</p>
            <FaqAccordion />
          </div>
          <div className={styles.column}>
            <h2>Go away Party</h2>
            <p>Everything you need to know</p>
            <FaqAccordion />
          </div>
          <div className={styles.column}>
            <h2>Where Im moving</h2>
            <p>Contact info and where to send a postcard</p>
            <FaqAccordion />
          </div>
        </div>
      </main>
    </div>
  );
}
