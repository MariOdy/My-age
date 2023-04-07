import localFont from "next/font/local";

import "./global.css";

export const metadata = {
  title: "My age",
  description: "Check your age by years, months and days",
};
const myFont = localFont({
  src: "../public/font/Geom-Variable.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body className="bg-[url('/img/bg.jpeg')] bg-cover flex justify-center	items-center	h-screen	">
        {children}
      </body>
    </html>
  );
}
