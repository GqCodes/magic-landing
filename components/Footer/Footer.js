export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-2'>
                <div className='footer__links'>
                  <span className='footer__column-title'>Get help</span>
                  <a href='#' className='footer__link'>
                    link
                  </a>
                  <a href='#' className='footer__link'>
                    link
                  </a>
                  <a href='#' className='footer__link'>
                    link
                  </a>
                </div>
              </div>
              <div className='col-md-2'>
                <div className='footer__links'>
                  <span className='footer__column-title'>Get help</span>
                  <a href='#' className='footer__link'>
                    link
                  </a>
                  <a href='#' className='footer__link'>
                    link
                  </a>
                  <a href='#' className='footer__link'>
                    link
                  </a>
                </div>
              </div>
              <div className='col-md-2'>
                <div className='footer__links'>
                  <span className='footer__column-title'>Get help</span>
                  <a href='#' className='footer__link'>
                    link
                  </a>
                  <a href='#' className='footer__link'>
                    link
                  </a>
                  <a href='#' className='footer__link'>
                    link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='footer__extra'>
              <span className='footer__column-title'>Sign up for newsletter</span>
              <input type='text' name='email_newsletter' className='footer__input' placeholder='youremail@company.com' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam voluptatem totam maiores quod nemo autem possimus delectus
                incidunt voluptates, cum molestiae placeat cumque? Temporibus non obcaecati iure eveniet. Vero, vitae!
              </p>
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
              </div>
            </div>
          </div>
        </div>
        <div className='row '>
          <div className='col-md-12'>
            <div className='footer__bottom'>
              <div className='footer__copy'>&copy; Lorem ipsum dolor sit amet consectetur.</div>
              <div className='footer__extra-links'>
                <a href='#'>Link</a>
                <a href='#'>Link</a>
                <a href='#'>Link</a>
                <a href='#'>Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
