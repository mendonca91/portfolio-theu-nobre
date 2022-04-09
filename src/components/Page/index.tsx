import Head from "next/head";
import React, { ReactNode } from "react";

interface PageProps {
  title: string;
  description: string;
  image?: string;
  dontIndexPage?: boolean;
  children: ReactNode;
  backgroundColor?: string;
}

const Page: React.FC<PageProps> = ({
  children,
  title,
  description,
  image,
  dontIndexPage = false,
  backgroundColor,
}) => (
  <>
    <Head>
      <title>{title}</title>

      {dontIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="theme-color" content="#000" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <link rel="icon" type="image/x-icon" href="/assets/MN.png" />
      <meta name="description" content={description} />

      {image && <meta name="image" content={image} />}

      <meta
        property="og:title"
        content="Matheus Nobre: contando histórias através dos vídeos"
      />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta
        property="og:site_name"
        content="Matheus Nobre: contando histórias através dos vídeos"
      />
    </Head>
    <main style={{ backgroundColor }}>{children}</main>
  </>
);

export default Page;
