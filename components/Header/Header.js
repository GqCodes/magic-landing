import AnnounceBar from '@/components/AnnounceBar/AnnounceBar';
import Image from 'next/image';
import magicLogo from '@/public/Magic-Logo.png';

export default function Header() {
  return (
    <>
      <AnnounceBar />
      <header className='header'>
        <div className='container flexItems'>
          <div className='header__logo'>
            <a href='#'>
              <Image src={magicLogo} priority />
            </a>
          </div>

          <div className='header__nav'>
            <a href='#'>Tickets</a>
            <a href='#'>Schedule</a>
            <a href='#'>Team</a>
            <a href='#'>News</a>
            <span>
              <a href='#'>Gameday</a>
              <a href='#'>Youth Basketball</a>
              <a href='#'>Shop</a>
              <a href='#'>Community</a>
              <a href='#'>Social</a>
            </span>
          </div>
          <div className='burger'>
            <a href='#' className='announce-bar__social-link'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </a>
            <a href='#'>
              <i className='fa-solid fa-bars'></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
