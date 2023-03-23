import Image from 'next/image';
import together89 from '@/public/together89.jpg';
import bluetreesmini from '@/public/bluetreesmini.png';
import blackcourtmini from '@/public/blackcourtmini.png';

export default function Collection2() {
  return (
    <section className='collection2'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <div className='collection2__item '>
              <div className='collection2__info'>
                <h2 className='collection2__title'>Get ready for the ultimate group experience</h2>
                <p className='collection2__paragraph'>Are you planning a group or client visit to Orlando?</p>
                <ul className='collection2__list'>
                  <div>
                    <Image src={bluetreesmini} className='round' />
                    <li className='collection2__list-item'>
                      <p>Contact our Tourism Sales Team for special travel trade industry rates and group opportunities.</p>
                    </li>
                  </div>
                  <div>
                    <Image src={blackcourtmini} className='round' />
                    <li className='collection2__list-item'>
                      <p>Get exclusive access to ticket inventory, unique experiences and a dedicated sales support team.</p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-md-6'>
            <div className='collection2__item  '>
              <Image src={together89} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
