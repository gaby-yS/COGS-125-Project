import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link href="/">Gabriela S.</Link>
      </div>

      <div style={styles.links}>
        <Link href="/projects" style={styles.link}>Projects</Link>
        <Link href="/resume" style={styles.link}>Resume</Link>
        <Link href="/contacts" style={styles.link}>Contact</Link>
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
    fontFamily: "Merriweather",
    fontWeight: "900",
    fontSize: "36px",
    color: "#FCF3DE",
  },

  links: {
    display: "flex",
    gap: "20px",
  },

  link: {
    textDecoration: "none",
    color: "#FCF3DE",
    fontSize: "18px",
    fontWeight: "500",
  },
};