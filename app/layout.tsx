import type { Metadata } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

const _manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
});

const _jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | TradeJS',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'TradeJS',
    'self-hosted trading framework',
    'TypeScript trading framework',
    'TypeScript backtesting framework',
    'algorithmic trading',
    'algorithmic trading TypeScript',
    'TypeScript trading strategies',
    'trading strategy backtesting',
    'TypeScript trading runtime',
    'AI trading gate',
    'open-core trading framework',
  ],
  authors: [{ name: 'TradeJS-Dev', url: siteConfig.links.github }],
  creator: 'TradeJS-Dev',
  publisher: siteConfig.name,
  category: 'technology',
  referrer: 'strict-origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tradejsdev',
    creator: '@tradejsdev',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/icon-light-32x32.png',
        type: 'image/png',
        sizes: '32x32',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        type: 'image/png',
        sizes: '32x32',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/icon-512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${_manrope.variable} ${_jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=107254154', 'ym');

            ym(107254154, 'init', {
              ssr: true,
              clickmap: true,
              ecommerce: 'dataLayer',
              referrer: document.referrer,
              url: location.href,
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/107254154"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
