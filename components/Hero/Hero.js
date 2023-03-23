export default function Hero() {
  return (
    <section>
      <div className='header-main'>
        <h1 className='header-main__title '>
          Orlando NBA
          <figure>
            <video autoPlay muted loop playsInline priority>
              <source src='/vid1.mp4' type='video/mp4' />
            </video>
          </figure>
          Games
          <br />
          where <span>magic</span> happens
        </h1>

        <div className='cta'>
          <a href='#' className='button'>
            View Schedule
          </a>
        </div>

        <div className='video-div'>
          <video autoPlay muted loop playsInline>
            <source src='vid5.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
      <div className='hero'>
        <div className='hero__collection1'>
          {/* <img src='https://spacecoastdaily.com/wp-content/uploads/2022/12/ORLANDO-MAGIC-800-1.jpg' className='hero__bg' /> */}
        </div>

        <div className='hero__collection2'>
          <div className='hero__info'>
            <h3 className='hero__title'>Experience live NBA games like never before!</h3>
            <p className='hero__paragraph'>
              Get ready for an adrenaline fueled ride as you witness the heart-stopping action of a live NBA game! Catch all the biggest
              names in basketball as they hit the court in Orlando for the full Magic experience!
              <br />
              <br />
              With in-game features for fans of all ages, your whole family will be part of a truly unforgettable event. Don't miss your
              chance to be part of the ultimate NBA and Magic spectacle. Grab your tickets now!
            </p>
            <a href='#' className='hero__button'>
              Find your tickets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
