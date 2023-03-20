import warner from '@/public/warnermedia.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row pb'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-3'>
                <div className='footer__links'>
                  <span className='footer__column-title'>Team</span>
                  <a href='#' className='footer__link'>
                    Roster
                  </a>
                  <a href='#' className='footer__link'>
                    Leaders
                  </a>
                  <a href='#' className='footer__link'>
                    Player Stats
                  </a>
                  <a href='#' className='footer__link'>
                    Team Stats
                  </a>
                  <a href='#' className='footer__link'>
                    Lakeland Magic
                  </a>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='footer__links'>
                  <span className='footer__column-title'>Tickets</span>
                  <a href='#' className='footer__link'>
                    Buy Tickets
                  </a>
                  <a href='#' className='footer__link'>
                    Ticket Plans
                  </a>
                  <a href='#' className='footer__link'>
                    Suites
                  </a>
                  <a href='#' className='footer__link'>
                    Group Tickets
                  </a>
                  <a href='#' className='footer__link'>
                    Visiting Orlando?
                  </a>
                  <a href='#' className='footer__link'>
                    Season Ticket Holders
                  </a>
                  <a href='#' className='footer__link'>
                    Military/First Responders
                  </a>
                  <a href='#' className='footer__link'>
                    Virtual Venue
                  </a>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='footer__links'>
                  <span className='footer__column-title'>News</span>
                  <a href='#' className='footer__link'>
                    News
                  </a>
                  <a href='#' className='footer__link'>
                    Schedule
                  </a>
                  <a href='#' className='footer__link'>
                    Videos
                  </a>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='footer__links'>
                  <span className='footer__column-title'>More</span>
                  <a href='#' className='footer__link'>
                    Amway Center
                  </a>
                  <a href='#' className='footer__link'>
                    Fan Code of Conduct
                  </a>
                  <a href='#' className='footer__link'>
                    Community
                  </a>
                  <a href='#' className='footer__link'>
                    OMYF
                  </a>
                  <a href='#' className='footer__link'>
                    Shop
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='footer__social-title'>
              <span>Connect With Us</span>
            </div>
            <div className='footer__social-icons'>
              <a href='#' className='footer__social-link'>
                <i className='fab fa-facebook'></i>
              </a>
              <a href='#' className='footer__social-link'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#' className='footer__social-link'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='#' className='footer__social-link'>
                <i className='fab fa-youtube'></i>
              </a>
              <a href='#' className='footer__social-link'>
                <i className='fab fa-tiktok'></i>
              </a>
              <a href='#' className='footer__social-link'>
                <i className='fab fa-snapchat'></i>
              </a>
              <a href='#' className='footer__social-link'>
                <i className='fa-regular fa-envelope'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='row '>
          <div className='col-md-12'>
            <div className='footer__bottom'>
              <div className='footer__copy'>
                <p>Copyright &copy; 2023 NBA Media Ventures, LLC. All rights reserved.</p>
                <p>We appreciate your understanding and flexibility.</p>
                <p>
                  <span className='no-border'>
                    <a href='/'>Policy Link</a>
                  </span>
                  <span></span> <a href='/'>Terms Of Use </a> <span></span> <a href='/'>Customer Support</a>
                  <span></span>
                  <a href='/'>Accessibility and Closed Captions</a> <span></span>
                  <a href='/'>Do Not Sell My Personal Information</a>
                </p>
                <p>If you are having difficulty accessing any content on this website, please visit our Accessibility page.</p>
                <p>NBA.com is part of Warner Media, LLC’s Turner Sports & Entertainment Digital Network</p>
                <Image src={warner} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
