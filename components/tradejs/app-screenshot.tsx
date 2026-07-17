import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AppScreenshotProps {
  src: string;
  alt: string;
  label: string;
  status?: string;
  className?: string;
  viewportClassName?: string;
  fit?: 'cover' | 'contain';
  priority?: boolean;
}

export function AppScreenshot({
  src,
  alt,
  label,
  status = 'REAL PRODUCT',
  className,
  viewportClassName,
  fit = 'cover',
  priority = false,
}: AppScreenshotProps) {
  return (
    <figure
      className={cn(
        'control-panel group relative flex flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#080d15] shadow-[0_32px_100px_rgba(3,8,15,0.38)] transition-[border-color,box-shadow] duration-500 hover:border-[#20c5bd]/25 hover:shadow-[0_36px_105px_rgba(3,8,15,0.42)] motion-reduce:transition-none',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff6b72]/80" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#f3bf72]/80" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#20c5bd]/80" />
          <span className="ml-2 truncate font-mono text-[8px] tracking-[0.14em] text-[#93a7bd] sm:text-[9px]">
            {label}
          </span>
        </div>
        <span className="ml-3 flex shrink-0 items-center gap-2 font-mono text-[7px] tracking-[0.12em] text-[#20c5bd] sm:text-[8px]">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-[#20c5bd]" />
          {status}
        </span>
      </div>

      <div
        className={cn(
          'relative aspect-[16/10] overflow-hidden bg-[#111318]',
          viewportClassName,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 62vw, 760px"
          className={cn(
            'object-center',
            fit === 'contain' ? 'object-contain' : 'object-cover',
          )}
        />
        <div className="screenshot-scan pointer-events-none absolute inset-x-0 top-0 h-1/3" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.035]" />
      </div>
    </figure>
  );
}
