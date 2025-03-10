import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const suit = localFont({
  src: "./SUIT-Variable.woff2",
});

export const metadata: Metadata = {
  title: "앱라우터 연습실",
  description: "앱라우터로 프로젝트를 세팅해보자",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={suit.className}>{children}</body>
    </html>
  );
}
