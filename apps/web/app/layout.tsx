import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "open-plan-assignment",
  description: "open-plan-assignment himchan kim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='font-pretendard'>{children}</body>
    </html>
  );
}
