import nbaLogo from '@/public/nba-logo.png';
import Image from 'next/image';

export default function AnnounceBar() {
  return (
    <div className='announce-bar '>
      <div className='container-fluid flexItems'>
        <a href='/'>
          <Image src={nbaLogo} priority />
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
            Teams
            <i className='fa-solid fa-chevron-down'></i>
          </a>
          <a href='#' className='announce-bar__social-link'>
            G League
          </a>
          <a href='#' className='announce-bar__social-link'>
            WNBA
          </a>
          <a href='#' className='announce-bar__social-link'>
            BAL
          </a>
          <a href='#' className='announce-bar__social-link'>
            NBA 2K
          </a>
          <a href='#' className='announce-bar__social-link'>
            NBA STORE
          </a>
          <a href='#' className='announce-bar__social-link'>
            NBA League Pass
          </a>
        </div>
      </div>
    </div>
  );
}
