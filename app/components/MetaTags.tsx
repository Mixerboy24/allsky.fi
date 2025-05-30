import Head from 'next/head';

const MetaTags = () => {
  return (
    <Head>
      {/* Meta Tags */}
      <meta name="description" content="Allsky.fi tarjoaa reaaliaikaista taivaskuvausta ja tähtitieteellistä dataa Suomesta. Seuraa yötaivasta ja näe upeat kuvat tähtitaivaasta milloin tahansa." />
      <meta name="keywords" content="Allsky, taivaskamera, tähtitiede, taivaskuvaus, yötaivas, taivaan tapahtumat, meteorit, revontulet" />
      <meta name="author" content="Allsky.fi" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Allsky.fi - Reaaliaikaiset taivaskuvat Suomesta" />
      <meta property="og:description" content="Katso reaaliaikaiset taivaskuvat ja seuraa tähtitieteellisiä tapahtumia Suomen yötaivaalta." />
      <meta property="og:image" content="https://allsky.fi/img/Allsky.png" />
      <meta property="og:url" content="https://allsky.fi" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Allsky.fi - Reaaliaikaiset taivaskuvat Suomesta" />
      <meta name="twitter:description" content="Katso reaaliaikaiset taivaskuvat ja seuraa tähtitieteellisiä tapahtumia Suomen yötaivaalta." />
      <meta name="twitter:image" content="https://allsky.fi/img/Allsky.png" />

      {/* Page Title */}
      <title>Allsky.fi - Reaaliaikaiset taivaskuvat Suomesta</title>
    </Head>
  );
};

export default MetaTags;
