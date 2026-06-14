'use client';


import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { useRef, useEffect, useState } from "react";



export default function Home() {
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);
    const scroll = (direction) => {
    if (!containerRef.current) return;

    const scrollAmount = 350;

    containerRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };
  
useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  setTimeout(() => {
    container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });

    setTimeout(() => {
      container.scrollTo({ left: container.scrollWidth * 0.6, behavior: "smooth" });
    }, 800);

    setTimeout(() => {
      container.scrollTo({ left: container.scrollWidth * 0.3, behavior: "smooth" });
    }, 1400);

    setTimeout(() => {
      container.scrollTo({ left: 0, behavior: "smooth" });
    }, 2000);
  }, 400);
}, []);

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
<div className={styles.galleryWrapper}>
  <Link href="/projects/inch" className={styles.cardLink}><div className={styles.projectSection}>
  
  <div className={styles.imageWrapper}>
    <Image
      src="/inch.png"
      alt="Inch Project"
      width={500}
      height={400}
      className={styles.image}
    />

    <div className={styles.overlay}>
      <h3 className={styles.projectTitle}>Budgeting in a Inch</h3>
      <p className={styles.description}>
        A multi-scale budgeting app project investigating how physical dimensions shape navigation.
      </p>
    </div>
  </div>

  </div></Link>
  <Link href="/projects/inch" className={styles.cardLink}><div className={styles.projectSection}>
  <div className={styles.imageWrapper}>
    <Image
      src="/cener.png"
      alt="Cener Project"
      width={500}
      height={400}
      className={styles.image}
    />

    <div className={styles.overlay}>
      <h3 className={styles.projectTitle}>Improving the EHR Experience</h3>
      <p className={styles.description}>
        Redesigned the Oracle Cerner EHR interface to improve usability, navigation, and the overall experience for healthcare workers.
      </p>
    </div>
  </div>

  </div></Link>

     
     
     
  </div>

</div>
     






    
    
    
  );
}