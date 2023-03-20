export default function Hero() {
  return (
    <>
      <div className='header-test'>
        <h1 className='test'>
          Feel the <span>magic</span>
          <figure>
            <video autoPlay muted loop playsInline>
              <source
                src='https://player.vimeo.com/external/467427545.sd.mp4?s=bc6d0549cb6958c29e763698c884186064779229&profile_id=164&oauth2_token_id=57447761'
                type='video/mp4'
              />
            </video>
            {/* <figcaption>Nulla vitae elit libero.</figcaption> */}
          </figure>
          of live <br /> NBA games in orlando
        </h1>
        <div className='cta'>
          <a href='#' className='button'>
            View Schedule
          </a>
        </div>

        <div className='video-div'>
          <video autoPlay muted loop playsInline>
            <source
              src='https://player.vimeo.com/external/467427545.sd.mp4?s=bc6d0549cb6958c29e763698c884186064779229&profile_id=164&oauth2_token_id=57447761'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
      <div className='hero'>
        <div className='hero__collection1'>
          <div className='group'> </div>
          {/* <img src='https://spacecoastdaily.com/wp-content/uploads/2022/12/ORLANDO-MAGIC-800-1.jpg' className='hero__bg' /> */}
        </div>

        <div className='hero__collection2'>
          <div className='hero__info'>
            <h3 className='hero__title'>Watch the Game & Enjoy the Show</h3>
            <p className='hero__paragraph'>
              Be on the edge of your seat as you watch a live NBA game. See all of your favorite players in action on the court! And it’s
              more than just the action of a basketball game—it’s experiencing all the Orlando Magic has to offer. In-game features for fans
              of all ages make an unforgettable experience for the whole family.
            </p>
            <a href='#' className='hero__button'>
              Find your tickets
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
