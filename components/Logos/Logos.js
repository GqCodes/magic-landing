import Image from 'next/image';
import disney from '@/public/disney.png';
import blue from '@/public/florida-blue.png';
import l3 from '@/public/l3.png';
import pepsi from '@/public/pepsi.png';
import ioa from '@/public/simply-ioa.png';
import city from '@/public/city-national.png';
import adventhealth from '@/public/advent.png';

export default function Logos() {
  return (
    <section className='logos'>
      <Image src={adventhealth} />
      <Image src={disney} />
      <Image src={blue} />
      <Image src={l3} />
      <Image src={pepsi} />
      <Image src={ioa} />
      <Image src={city} />
    </section>
  );
}
