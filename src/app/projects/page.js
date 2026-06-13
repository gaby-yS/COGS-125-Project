'use client';


import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";

export default function projects() {
  const [show, setShow] = useState(false);
  return (
    <div>
    <Navbar />
    </div>);
}
