import Image from 'next/image';

import together from '@/public/together.png';
import trees from '@/public/trees.jpg';
import orl from '@/public/orl.jpg';

export default function Collection2() {
  return (
    <section className='collection2'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='collection2__product-item collection2__product-item__1'>
              <div className='collection2__product-info'>
                <h2 className='collection2__product-title'>
                  Get ready for the ultimate group experience
                  {/* Groups, Tour Operators and Travel Industry Professionals */}
                </h2>
                <p className='collection2__paragraph'>Are you planning a group or client visit to Orlando?</p>
                <ul className='collection2__list'>
                  <div>
                    <Image src={trees} className='round' />
                    <li className='collection2__list-item'>
                      <p>Contact our Tourism Sales Team for special travel trade industry rates and group opportunities.</p>
                    </li>
                  </div>
                  <div>
                    <Image src={orl} className='round' />
                    <li className='collection2__list-item'>
                      <p>Get exclusive access to ticket inventory, unique experiences and a dedicated sales support team.</p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='collection2__product-item collection2__product-item__2 '>
              <Image src={together} />

              {/* <img
                src='https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Forlandomagicdaily.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1135146287.jpeg'
                alt=''
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
