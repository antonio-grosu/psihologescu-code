import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/8navbar";

import Contact from "./components/7contact";

export const metadata = {
  title: "Psihologescu",
  description:
    "Psihologescu este oferă servicii de evaluare psihologică, psihoterapie și terapie de tip neurofeedback în scopul îmbunătățirii vieții de zi cu zi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar />
        <main className="my-24">{children}</main>
        <Contact />
      </body>
    </html>
  );
}
