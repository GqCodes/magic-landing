import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function MainLayout({ children }) {
  return (
    <div className='fixed-nav nav-transparent'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
