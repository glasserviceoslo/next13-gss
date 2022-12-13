import Image from 'next/image';
import LogoDark from 'public/logo-dark.svg';
import LogoLight from 'public/logo-light.svg';

const Logo = () => (
  <a href="/" className="flex items-center">
    <Image
      src={LogoLight}
      className="mr-3 hidden h-10 w-auto dark:block md:h-12"
      alt="Glass.no Logo"
    />
    <Image
      src={LogoDark}
      className="mr-3 block h-10 w-auto dark:hidden md:h-12"
      alt="Glass.no Logo"
    />
  </a>
);

export default Logo;
