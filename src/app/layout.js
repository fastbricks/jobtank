import NavBar from "./component/NavBar";
import BottomFooter from "./component/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import "@/styles/Login.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jobtank",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <BottomFooter />
      </body>
    </html>
  );
}
