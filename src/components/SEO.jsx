import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <title>Your Name - Portfolio</title>
      <meta name="description" content="Full Stack Developer Portfolio showcasing web development, UI/UX design, and mobile app development projects." />
      <meta name="keywords" content="full stack developer, web development, UI/UX design, mobile app development, React, Node.js" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://your-portfolio-url.com/" />
      <meta property="og:title" content="Your Name - Portfolio" />
      <meta property="og:description" content="Full Stack Developer Portfolio showcasing web development, UI/UX design, and mobile app development projects." />
      <meta property="og:image" content="https://your-portfolio-url.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://your-portfolio-url.com/" />
      <meta property="twitter:title" content="Your Name - Portfolio" />
      <meta property="twitter:description" content="Full Stack Developer Portfolio showcasing web development, UI/UX design, and mobile app development projects." />
      <meta property="twitter:image" content="https://your-portfolio-url.com/og-image.jpg" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Theme Color */}
      <meta name="theme-color" content="#000000" />
    </Helmet>
  );
};

export default SEO; 