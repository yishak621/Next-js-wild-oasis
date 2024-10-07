import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
//conventinal name
const josafin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap", //use defualt first and then swap when downloaded
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxuirous cabin hotel located in the heart of the italian Dolontes, surrounded by beutifull mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josafin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className=" max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>

        {/* <footer className=" absolute bottom-1">
          Copyright by The Wild Oasis
        </footer> */}
      </body>
    </html>
  );
}
