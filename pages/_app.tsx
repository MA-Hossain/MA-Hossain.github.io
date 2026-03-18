import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lora } from "next/font/google";
import { ThemeProvider } from "next-themes";

const lora = Lora({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <main className={lora.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
