export default function Grid() {
  return (
    <>
      <section className='categories'>
        <h3>Unforgettable Experiences</h3>
        {/* <div className='text-xl'>All The TV You Love</div>
        <div classNameName='sub-text'>
          Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.
        </div> */}

        <div className='covers'>
          <div className='cover-1'>
            <div className='cover-grad'></div>
            <div className='cover-text'>
              <div className='sub-title'>See your favorite</div>
              <h3> nba players</h3>
            </div>
          </div>
          <div className='cover-2'>
            <div className='cover-grad'></div>
            <div className='cover-text'>
              <div className='sub-title'>Amazing halftime </div>
              <h3>entertainment</h3>
            </div>
          </div>
          <div className='cover-3'>
            <div className='cover-grad'></div>
            <div className='cover-text'>
              <div className='sub-title'>Light and video</div>
              <h3>shows</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
