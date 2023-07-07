import { Inter, Rajdhani } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",

});

const rajdhani = Rajdhani({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rajdhani",

});

export { inter, rajdhani };
