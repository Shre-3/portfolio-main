import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Shreya Acharya | Data Scientist",
  description:
    "Portfolio of Shreya Acharya - Data Scientist with a background in cybersecurity and ML. Building churn analytics, RAG pipelines, and full-stack applications.",
  keywords: [
    "Shreya Acharya",
    "Data Scientist",
    "Machine Learning",
    "RAG",
    "FastAPI",
    "React",
    "Cybersecurity",
    "Portfolio",
  ],
  authors: [{ name: "Shreya Acharya" }],
  openGraph: {
    title: "Shreya Acharya | Data Scientist",
    description:
      "Data Scientist building churn analytics, RAG pipelines, and full-stack applications.",
    url: "https://shreya-acharya.vercel.app",
    siteName: "Shreya Acharya Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/Shre-3",
        width: 400,
        height: 400,
        alt: "Shreya Acharya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreya Acharya | Data Scientist",
    description:
      "Data Scientist building churn analytics, RAG pipelines, and full-stack applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {/* Anti-flash: apply saved theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
