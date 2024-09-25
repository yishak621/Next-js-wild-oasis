import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      {/* <img src="/bg.png" alt="Mountains and forests with two cabins" /> */}

      <Image
        fill
        placeholder="blur"
        className=" object-cover object-top"
        src={bg}
        quality={80}
        alt="Mountains and forests with two cabins"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.{" "}
          <a href="https://github.com/yishak621/hifiles-desktop-app/releases/download/v1.0.4/hifiles.desktop.app.Setup.1.0.4.exe">
            link
          </a>
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
