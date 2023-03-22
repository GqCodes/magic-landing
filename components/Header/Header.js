import AnnounceBar from '@/components/AnnounceBar/AnnounceBar';
import { Bebas_Neue, Roboto_Mono, Oswald } from 'next/font/google';

import Image from 'next/image';
import magicLogo from '@/public/Magic-Logo.png';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export default function Header() {
  return (
    <>
      <AnnounceBar />
      <header className='header'>
        <div className='container flexItems'>
          <div className='header__logo'>
            <a href='/link'>
              <Image src={magicLogo} />
            </a>
          </div>

          <div className='header__nav'>
            <a href='/link'>Tickets</a>
            <a href='/link'>Schedule</a>
            <a href='/link'>Team</a>
            <a href='/link'>News</a>
            <span>
              <a href='/link'>Gameday</a>
              <a href='/link'>Youth Basketball</a>
              <a href='/link'>Shop</a>
              <a href='/link'>Community</a>
              <a href='/link'>Social</a>
            </span>
          </div>
          <div className='burger'>
            {/* <a href='#' className='announce-bar__social-link'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </a> */}
            <a href='/'>
              <i className='fa-solid fa-bars'></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
