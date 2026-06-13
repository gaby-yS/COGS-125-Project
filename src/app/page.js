'use client';


import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
    <Navbar />

    <div className={styles.hero}>
  <h1 className={styles.heroTitle}>Hi, I'm Gabriela.</h1>

  <p className={styles.heroText}>
    Business Economics and Cognitive Science student interested in UX
    design, human-centered systems, and thoughtful digital experiences.
  </p>
</div>
    <div className ={styles.allProject}><div className={styles.projectSection}>
      <Image
        src="/inch.png"
        alt="Inch Project"
        width={500}
        height = {400}
        className={styles.image}
      />

      <h3 className={styles.projectTitle}>Budgeting in a Inch</h3>
      <p className= {styles.description}>A multi-scale budgeting app project investigating how physical dimensions shape navigation, usability, and engagement within financial tools.</p>
      <button className={styles.button} onClick={() => setShow(!show)}>
        See More
      </button>
     </div>

     <div className={styles.projectSection}>
      <Image
        src="/cener.png"
        alt="Cener picture"
        width={500}
        height = {400}
        className={styles.image}
      />

      <h3 className={styles.projectTitle}>Improving the EHR Experience</h3>
      <p className= {styles.description}>Redesigned the Oracle Cerner EHR interface to improve usability, navigation, and the overall experience for healthcare workers.</p>
      <button className={styles.button} onClick={() => setShow(!show)}>
        See More
      </button>
     </div></div>
     






    
    </div>
    
  );
}
