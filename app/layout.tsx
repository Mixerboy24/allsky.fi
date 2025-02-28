import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';
import 'leaflet/dist/leaflet.css';

import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata = {
  title: 'Allsky.fi - Reaaliaikaista taivaskuvausta Suomesta',
  description: 'Katso reaaliaikaiset taivaskuvat ja seuraa tähtitieteellisiä tapahtumia Suomen yötaivaalta.',
  openGraph: {
    title: 'Allsky.fi - Reaaliaikaista taivaskuvausta Suomesta',
    description: 'Katso reaaliaikaiset taivaskuvat ja seuraa tähtitieteellisiä tapahtumia Suomen yötaivaalta.',
    url: 'https://allsky.fi',
    images: [
      {
        url: 'https://allsky.fi/img/Allsky.png',
        width: 800,
        height: 600,
        alt: 'Allsky.fi logokuva',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allsky.fi - Reaaliaikaista taivaskuvausta Suomesta',
    description: 'Katso reaaliaikaiset taivaskuvat ja seuraa tähtitieteellisiä tapahtumia Suomen yötaivaalta.',
    image: 'https://allsky.fi/img/Allsky.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" type="image/png" />
      <GoogleAnalytics gaId="G-9F00DSYY5X" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
