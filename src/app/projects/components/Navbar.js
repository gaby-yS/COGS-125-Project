import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      
      {/* Left: Logo */}
      <div style={styles.logo}>
        <Link href="/" >Gabriela S.</Link>
      </div>

      {/* Right: Links */}
      <div style={styles.links}>
        <Link href="/projects" style={styles.link}>Projects</Link>
        <Link href="/resume" style={styles.link}>Resume</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
      </div>

    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "2px solid #FCF3DE",
    background: "#161716",
  },
  logo: {
    fontFamily: "Host Grotesk",
    fontWeight: "bold",
    fontSize: "36px",
    color:" #FCF3DE",
    fontFamily: "Merriweather",
    fontWeight: "900",



  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#FCF3DE",
    fontFamily: "Host Grotesk",
    fontSize: "18px",
    fontWeight: "500",
    

  },
};