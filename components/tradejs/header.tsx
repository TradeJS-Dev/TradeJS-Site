'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from './locale-provider';
import { Github, Menu, X as CloseIcon } from 'lucide-react';
import { reachYandexMetrikaGoal } from '@/lib/yandex-metrika';

const GITHUB_REPO_URL = 'https://github.com/tradejs-dev/tradejs';

export function Header({ marketplace = false }: { marketplace?: boolean }) {
  const { locale, t, toggleLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const firstBacktestUrl =
    locale === 'ru'
      ? 'https://docs.tradejs.dev/ru/getting-started/first-backtest'
      : 'https://docs.tradejs.dev/getting-started/first-backtest';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.advantages, href: '#advantages' },
    { label: t.nav.architectures, href: '#trading-models' },
    { label: t.nav.devExperience, href: '#dev-experience' },
  ].map((link) => ({ ...link, href: marketplace ? `/${link.href}` : link.href }));
  const links = [...navLinks, { label: 'Marketplace', href: '/marketplace' }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-background/90 border-b border-border shadow-[0_14px_40px_rgba(0,0,0,0.34)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link
          href={marketplace ? '/' : '#'}
          className="flex items-center gap-2 group"
          aria-label="TradeJS Home"
        >
          <Image src="/icon.svg" alt="" width={32} height={32} className="rounded-md" />
          <span className="text-foreground font-bold text-lg tracking-tight">
            Trade<span className="text-primary">JS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-5"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={marketplace && link.href === '/marketplace' ? 'page' : undefined}
              className="text-muted-foreground hover:text-foreground aria-[current=page]:text-primary text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            aria-label={`Switch language to ${locale === 'en' ? 'Russian' : 'English'}`}
          >
            <span
              className={
                locale === 'en' ? 'text-foreground' : 'text-muted-foreground'
              }
            >
              EN
            </span>
            <span className="text-border">|</span>
            <span
              className={
                locale === 'ru' ? 'text-foreground' : 'text-muted-foreground'
              }
            >
              RU
            </span>
          </button>
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/70 px-4 py-2 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-surface transition-colors"
            aria-label={t.nav.github}
          >
            <Github size={16} />
            <span>{t.nav.github}</span>
          </a>
          <a
            href={firstBacktestUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              reachYandexMetrikaGoal('open_quickstart', {
                placement: 'header',
                locale,
              })
            }
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-accent-hover transition-colors glow-accent"
          >
            {t.nav.quickstart}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-border bg-background/95 shadow-[0_16px_36px_rgba(0,0,0,0.34)] backdrop-blur-xl lg:hidden">
          <nav
            className="flex flex-col px-4 py-4 gap-3"
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={marketplace && link.href === '/marketplace' ? 'page' : undefined}
                className="text-muted-foreground hover:text-foreground aria-[current=page]:text-primary text-sm font-medium py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border" />
            <div className="flex items-center gap-3 py-2">
              <button
                onClick={toggleLocale}
                className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Switch language to ${locale === 'en' ? 'Russian' : 'English'}`}
              >
                <span
                  className={
                    locale === 'en'
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }
                >
                  EN
                </span>
                <span className="text-border">|</span>
                <span
                  className={
                    locale === 'ru'
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }
                >
                  RU
                </span>
              </button>
            </div>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-surface transition-colors"
            >
              <Github size={16} />
              <span>{t.nav.github}</span>
            </a>
            <a
              href={firstBacktestUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                reachYandexMetrikaGoal('open_quickstart', {
                  placement: 'mobile_header',
                  locale,
                });
                setMobileOpen(false);
              }}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground text-center hover:bg-accent-hover transition-colors"
            >
              {t.nav.quickstart}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
