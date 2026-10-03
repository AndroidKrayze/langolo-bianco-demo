import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { publicOrigin, site } from "@/site.config";
import { JsonLd } from "@/components/JsonLd";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "L'Angolo Bianco · Italian café in Marylebone";
const description =
  "Family kitchen on Crawford Street. Home made pasta, breakfast through late lunch. Book on TheFork or call 020 7724 5888.";

const origin = publicOrigin();

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: title,
    template: "%s · L'Angolo Bianco",
  },
  description,
  keywords: [
    "L'Angolo Bianco",
    "Caffe L'Angolo Bianco",
    "Italian restaurant Marylebone",
    "home made pasta London",
    "Crawford Street café",
    "mushroom pasta Marylebone",
    "TheFork L'Angolo Bianco",
    "Italian café Marble Arch",
    "family Italian London",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: origin,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The white shopfront of L'Angolo Bianco on Crawford Street, Marylebone",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
