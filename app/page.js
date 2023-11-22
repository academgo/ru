import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage"
import { notFound } from 'next/navigation'
import { getSeo } from "utils/getSeo";
import Script from "next/script";
import FacebookPixel from "./FacebookPixel";

export default async function Home() {
  const data = await getPage('/');
  if (!data) {
    notFound();
  }
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XTMLVRC9RR"
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XTMLVRC9RR');
        `}
      </Script>
      {/* <FacebookPixel /> */}
      <BlockRenderer blocks={data} />
    </>
  );
}

export async function generateMetadata() {
  const seo = await getSeo("/");
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
  };
}