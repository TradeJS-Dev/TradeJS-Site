import type { Metadata } from 'next';
import { Marketplace } from '@/components/tradejs/marketplace';
import { absoluteUrl } from '@/lib/site-config';
import './marketplace.css';

const title = 'Marketplace';
const description = 'Find ready-to-use trading strategies, exchange adapters, and plugins for your TradeJS project.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/marketplace' },
  openGraph: { title: 'TradeJS Marketplace', description, url: absoluteUrl('/marketplace') },
  twitter: { title: 'TradeJS Marketplace', description },
};

export default function MarketplacePage() {
  return <Marketplace />;
}
