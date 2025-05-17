"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { FaqAccordion } from "./faq";
import { falunFaqData, linkopingFaqData, partyFaqData } from "./faqInfo";
import Feedback from "./feedback";
import Party from "./party";



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
              Ja det stämmer, i juni bär det av. Denna sida finns då för den informera den vilsne. Eller för få mig själv att känna mig viktig och rolig... <br /> <br />

              Oavsett så finns sidan här! Har du några frågor som inte täcks av svaren nedan så kontaka Joakim på valfritt sätt så kommer den fråga leta sin in här!
              Det kommer allt eftersom publiceras mer information här, så håll utkik! <br /> <br />

              Saknar man någon funktion, något som inte funkar eller att man bara är lite nördig och nyfiken så kan man se den något vibekodade öppna källkoden här: <a href="https://github.com/Jojoje/lamnaLinkoping">Github</a>
            </p>
          </div>
        </div>

        <div className={styles.columnsSection}>
          <div className={styles.column}>
            <h2>Linköping</h2>
            <p>Allt du behöver veta om nuet och tiden som varit.</p>
            <FaqAccordion items={linkopingFaqData} />
            <Feedback/>
          </div>
          <div className={`${styles.column} ${styles.highlightedColumn}`}>
            <h2>Hej då event</h2>
            <p>Allt du behöver veta om du är sugen på att säga hej då eller ses snart igen.</p>
            <Party/>
            <FaqAccordion items={partyFaqData}/>
          </div>
          <div className={styles.column}>
            <h2>Falun</h2>
            <p>Allt du behöver veta om framtiden Joakim står inför.</p>
            <FaqAccordion items={falunFaqData}/>
          </div>
        </div>
      </main>
    </div>
  );
}
