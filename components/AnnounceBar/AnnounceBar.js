import nbaLogo from '@/public/nba-logo.png';
import Image from 'next/image';

export default function AnnounceBar() {
  return (
    <div className='announce-bar '>
      <div className='container-fluid flexItems'>
        <a href='/'>
          <Image src={nbaLogo} />
        </a>
        <div className='announce-bar__links'>
          <a href='#' className='announce-bar__social-link'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='#' className='announce-bar__social-link'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='#' className='announce-bar__social-link'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#' className='announce-bar__social-link'>
            <i className='fab fa-youtube'></i>
          </a>
          <a href='#' className='announce-bar__social-link'>
            <i className='fab fa-tiktok'></i>
          </a>
          <a href='#' className='announce-bar__social-link'>
            <i className='fab fa-snapchat'></i>
          </a>
          <a href='#' className='announce-bar__social-link'>
            <i className='fa-regular fa-envelope'></i>
          </a>
        </div>
        <div className='search'>
          <a href='#' className='announce-bar__social-link'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
