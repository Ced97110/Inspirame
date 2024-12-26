import Link from 'next/link';
import Image from 'next/image';

const NavLogo = ({ width, height }) => {
  return (
    <Link href="/">
      <Image 
        src="https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/primary-logo-svg" 
        alt="Logo" 
        width={width} 
        height={height}
      />
    </Link>
  );
};

export default NavLogo;