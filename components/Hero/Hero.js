export default function Hero() {
  return (
    <>
      <div className='header-test'>
        <h1 className='test'>
          <span>Feel the magic</span> of a live NBA game in orlando.
        </h1>
        <div className='video-div'>
          <video autoPlay loop muted controls playsInline>
            <source src='https://player.vimeo.com/external/451464846.sd.mp4?s=f17fd0cf4fabbbe198a3e66cf1ed7a6fb0585836&profile_id=164&oauth2_token_id=57447761' />
          </video>
        </div>
      </div>
      <div className='hero'>
        <div className='hero__collection1'>
          <img
            src='https://images.pexels.com/photos/5096351/pexels-photo-5096351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='hero__bg'
          />
          <div className='hero__content-container1'>
            <div className='hero__info'>
              <a href='#' className='hero__button'>
                Men
              </a>
            </div>
          </div>
        </div>

        <div className='hero__collection2'>
          <img
            src='https://images.pexels.com/photos/3394668/pexels-photo-3394668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='hero__bg'
          />
          <div className='hero__content-container2'>
            <div className='hero__info'>
              <a href='#' className='hero__button'>
                Women
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
