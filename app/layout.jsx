export const metadata = {
  title: "DuoForce",
  description: "Moving help, junk removal, cleanups, and heavy lifting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
