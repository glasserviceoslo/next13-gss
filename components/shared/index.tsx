import Link from 'next/link';

interface BaseProps {
  children?: React.ReactNode | string;
  classes?: string;
  href: string;
  handleClick?: (e: React.MouseEvent) => void;
}

export const ButtonPrimary = ({
  children,
  classes,
  handleClick,
}: Omit<BaseProps, 'href'>) => (
  <button
    type="button"
    className={`mr-3 rounded bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 md:mr-0 ${classes}`}
    onClick={handleClick}
  >
    {children}
  </button>
);

export const LinkPrimary = ({
  href,
  children,
  classes,
}: Omit<BaseProps, 'handleClick'>) => (
  <Link
    href={href}
    className={`block w-full rounded bg-primary-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring active:bg-primary-500 sm:w-auto ${classes}`}
  >
    {children}
  </Link>
);

export const LinkOutline = ({
  href,
  children,
  classes,
}: Omit<BaseProps, 'handleClick'>) => (
  <Link
    href={href}
    className={`block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary-600 shadow hover:text-primary-700 focus:outline-none focus:ring active:text-primary-500 sm:w-auto ${classes}`}
  >
    {children}
  </Link>
);
