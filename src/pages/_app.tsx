import Chatbot from "@/components/ChatBox";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16"> {/* biar tidak ketutup navbar */}
        <Component {...pageProps} />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
