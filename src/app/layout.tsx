import "@/styles/globals.css";
import { BASE_URL_LOCAL } from "@/utils/constant";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ReduxProvider from "@/store/provider";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL_LOCAL),
  title: {
    default: "Dentists Tools",
    template: `%s | Dentists Tools`,
  },
  description: "This is the home page",
  verification: {
    google: "google-site-verification=878787878787",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ReduxProvider>
          <Providers>
            <Header />
            {children}
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
