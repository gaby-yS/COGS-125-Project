'use client';


import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";

export default function ResumePage() {
  return (
    <div>
      <Navbar />

      <div className={styles.resumeContainer}>
        <h1 className={styles.resumeTitle}>My Resume</h1>

        <p className={styles.resumeText}>
          View or download my resume below.
        </p>

        <iframe
          src="/resume.pdf"
          className={styles.resumePdf}
        />

        <a
          href="/resume.pdf"
          download
          className={styles.resumeButton}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

