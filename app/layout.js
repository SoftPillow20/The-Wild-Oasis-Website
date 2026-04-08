import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

import { ReservationProvider } from "./_components/ReservationContext";

import { Josefin_Sans } from "next/font/google";
import { auth } from "./_lib/auth";
import { AuthProvider } from "./_components/authContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s — The Wild Oasis",
    default: "Welcome — The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolimites, surrounded by beautiful mountains and dark forests",
};

export default async function RootLayout({ children }) {
  const session = await auth(); //This makes this component dynamic; Consequently, this makes all the pages navigated / coming from this component, dynamic.

  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <AuthProvider session={session}>
          <Header />
          <div className="flex-1 px-8 py-12 grid">
            <main className="max-w-7xl mx-auto antialiased w-full">
              <ReservationProvider>{children}</ReservationProvider>
            </main>
          </div>
        </AuthProvider>
        <footer className="mx-auto py-3 z-10">
          Copy right &copy; Bernie 2026. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
