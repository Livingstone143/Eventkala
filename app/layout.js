import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"] ,
weight:['400','500','600','700','800'],
varible:'--font-poppins',
}
);

export const metadata = {
  title: "Eventkala",
  description: "an Event management platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.varible}>{children}</body>
    </html>
  );
}
