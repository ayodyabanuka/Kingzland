import { navigation } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className=' py-3 bg-white/50 backdrop-blur-md'>
      <div className='flex items-center justify-between max-w-screen-xl mx-auto'>
        <Image src={'/kingzland.png'} alt={''} width={200} height={100}></Image>
        <div className='flex gap-8 text-sm'>
          {navigation.map((nav) => (
            <Link
              key={nav.name}
              href={nav.link}
              className=' hover:text-yellow-400 transition-all duration-200'
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
