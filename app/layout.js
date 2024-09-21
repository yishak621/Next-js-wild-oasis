import { title } from "process";
import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";

//conventinal name
export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo />
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
