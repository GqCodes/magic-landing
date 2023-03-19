export default function Hero1() {
  return (
    <>
      <div className='main'>
        <div className='container'>
          <div className='row flexCenter'>
            <div className='col-10'>
              <h2>
                feel the <span>magic</span> of live
              </h2>
            </div>
            <div className='col-2 curves'>
              <img src='https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb' alt='' />
            </div>
          </div>
          <div className='row flexCenter'>
            <div className='col-7 curves'>
              <img src='https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb' alt='' />
            </div>
            <div className='col-5'>
              <h2>nba game</h2>
            </div>
          </div>
          <div className='row flexCenter'>
            <div className='col-5'>
              <h2>in orlando</h2>
            </div>
            <div className='col-7 curves'>
              <img src='https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb' alt='' />
            </div>
          </div>
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
