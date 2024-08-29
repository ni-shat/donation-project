import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "./context/ModalContext";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "One Path project",
  description: "A user-friendly donation platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
