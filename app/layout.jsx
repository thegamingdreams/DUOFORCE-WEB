export const metadata = {
  title: "DuoForce",
  description: "Moving help, junk removal, cleanups, and heavy lifting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#000" }}>
        {children}
      </body>
    </html>
  );
}
