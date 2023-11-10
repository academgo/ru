import { Roboto, Rubik } from 'next/font/google';

import '../styles/globals.css';
import { getMenu } from 'utils/getMenu';
import { getFooter } from 'utils/getFooter';
import { TheHeader } from 'components/TheHeader';
import { TheFooter } from 'components/TheFooter';
import CookieConsent from 'components/CookieConsent/CookieConsent';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-roboto',
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-rubik',
});

export default async function RootLayout({ children }) {
  const headerData = await getMenu();
  const footerData = await getFooter();
  // console.log(footerData.linksNavigate);
  return (
    <html lang="en" className={`${roboto.variable} ${rubik.variable}`}>
      <body className='font-body'>
        <TheHeader
          logo={headerData.logo}
          items={headerData.mainMenuItems}
        />
        {children}
        <TheFooter
          logo={footerData.logo}
          linksNavigate={footerData.linksNavigate}
          linksServices={footerData.linksServices}
        />
        <CookieConsent />
      </body>
    </html>
  );
}