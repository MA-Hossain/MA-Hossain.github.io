import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lora, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <main className={`${lora.variable} ${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
