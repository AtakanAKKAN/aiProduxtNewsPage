import { MyProvider } from "./context/MyContext";
import "./globals.css";

export const metadata = {
  title: "The Peanut News",
  description: "Global News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
