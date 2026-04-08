export default function DuoForceWebsite() {
  const services = [
    { title: "Moving Help", description: "Carry furniture, boxes, appliances, and more.", icon: "📦" },
    { title: "Junk Removal", description: "We haul unwanted items to the dumpster fast and easy.", icon: "🗑️" },
    { title: "Cleanups", description: "Trash, clutter, and small messy jobs — we handle it.", icon: "🧹" },
    { title: "Heavy Lifting", description: "Delivered, moved, or need muscle? We’ve got it.", icon: "💪" },
  ];

  const reasons = [
    "Young and motivated",
    "Fast and reliable",
    "Affordable and fair pricing",
    "Strong work ethic",
    "We treat every job like it’s our own",
  ];

  const notes = [
    "Helping two teenagers build their first business.",
    "Every job supports our hustle, future, and dreams.",
    "We’re learning, working hard, and giving 100% on every job.",
    "Your support helps us grow into young entrepreneurs.",
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(180deg, #000 0%, #071100 100%)",
      color: "white",
      padding: "30px 20px",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
    },
    hero: {
      background: "#0a0a0a",
      border: "1px solid #2f2f2f",
      borderRadius: "24px",
      padding: "32px",
      boxShadow: "0 0 30px rgba(132,255,0,0.12)",
    },
    title: {
      fontSize: "56px",
      fontWeight: "900",
      margin: 0,
      lineHeight: 1,
    },
    green: {
      color: "#8DFF2D",
    },
    subtitle: {
      color: "#cfcfcf",
      fontSize: "18px",
      marginTop: "16px",
      lineHeight: 1.6,
    },
    buttonRow: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap",
      marginTop: "24px",
    },
    primaryBtn: {
      background: "#8DFF2D",
      color: "#000",
      padding: "14px 22px",
      borderRadius: "14px",
      textDecoration: "none",
      fontWeight: "800",
      display: "inline-block",
    },
    secondaryBtn: {
      background: "#111",
      color: "#fff",
      padding: "14px 22px",
      borderRadius: "14px",
      textDecoration: "none",
      border: "1px solid #333",
      fontWeight: "700",
      display: "inline-block",
    },
    section: {
      marginTop: "28px",
      background: "#0a0a0a",
      border: "1px solid #2f2f2f",
      borderRadius: "24px",
      padding: "28px",
    },
    sectionTitle: {
      fontSize: "32px",
      fontWeight: "900",
      marginBottom: "18px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "16px",
    },
    card: {
      background: "#111",
      border: "1px solid #2f2f2f",
      borderRadius: "18px",
      padding: "20px",
    },
    icon: {
      fontSize: "32px",
    },
    cardTitle: {
      fontSize: "22px",
      fontWeight: "800",
      margin: "12px 0 8px",
    },
    text: {
      color: "#d4d4d4",
      lineHeight: 1.6,
    },
    list: {
      display: "grid",
      gap: "12px",
    },
    listItem: {
      background: "#111",
      border: "1px solid #2f2f2f",
      borderRadius: "14px",
      padding: "14px 16px",
      color: "#e5e5e5",
    },
    priceBox: {
      marginTop: "16px",
      background: "#111",
      border: "1px solid #2f2f2f",
      borderRadius: "18px",
      padding: "22px",
      textAlign: "center",
    },
    price: {
      fontSize: "46px",
      fontWeight: "900",
      color: "#8DFF2D",
      margin: "10px 0",
    },
    footerBox: {
      marginTop: "28px",
      textAlign: "center",
      background: "rgba(141,255,45,0.08)",
      border: "1px solid rgba(141,255,45,0.25)",
      borderRadius: "22px",
      padding: "28px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.hero}>
          <h1 style={styles.title}>
            DUO <span style={styles.green}>FORCE</span>
          </h1>
          <p style={styles.subtitle}>
            Two guys. One team. We get it done. Fast, strong, reliable help for moving,
            junk removal, cleanups, and heavy lifting.
          </p>

          <div style={styles.buttonRow}>
            <a href="tel:4797151258" style={styles.primaryBtn}>
              Call 479-715-1258
            </a>
            <a href="#services" style={styles.secondaryBtn}>
              View Services
            </a>
          </div>
        </div>

        <div id="services" style={styles.section}>
          <div style={styles.sectionTitle}>Services We Offer</div>
          <div style={styles.grid}>
            {services.map((service) => (
              <div key={service.title} style={styles.card}>
                <div style={styles.icon}>{service.icon}</div>
                <div style={styles.cardTitle}>{service.title}</div>
                <div style={styles.text}>{service.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Pricing</div>
          <div style={styles.priceBox}>
            <div style={{ color: "#cfcfcf" }}>Prices Start At</div>
            <div style={styles.price}>$20 – $150+</div>
            <div style={styles.text}>Depending on the size and job</div>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Why Choose Us?</div>
          <div style={styles.list}>
            {reasons.map((reason) => (
              <div key={reason} style={styles.listItem}>✓ {reason}</div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.sectionTitle}>Helping Two Teenagers Build Their First Business</div>
          <div style={styles.list}>
            {notes.map((note) => (
              <div key={note} style={styles.listItem}>{note}</div>
            ))}
          </div>
        </div>

        <div style={styles.footerBox}>
          <div style={{ fontSize: "30px", fontWeight: "900" }}>Ready when you need us</div>
          <p style={{ ...styles.text, marginTop: "10px" }}>
            Weekdays and weekends. Quick replies. Respectful service.
          </p>
          <div style={styles.buttonRow}>
            <a href="tel:4797151258" style={styles.primaryBtn}>
              Text or Call Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
