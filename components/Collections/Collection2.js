export default function Collection2() {
  return (
    <section className='collection2'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='collection2__product-item collection2__product-item__1'>
              <img src='https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />

              <div className='collection2__product-info'>
                <span className='collection2__product-title'>Sneakers</span>
                <span className='collection2__product-price'>Price</span>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='collection2__product-item collection2__product-item__2 '>
              <img src='https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />

              <div className='collection2__product-info'>
                <span className='collection2__product-title'>Sneakers</span>
                <span className='collection2__product-price'>Price</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='contact-us'>
        <a href='/'>Call Us</a>
        <a href='/'>Call Us</a>
      </div>
    </section>
  );
}
