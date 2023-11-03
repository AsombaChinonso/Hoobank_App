import './App.css';
import styles  from './style';

import Billing from './components/Billing';
import Business from './components/Business';
import Button from './components/Button';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import CardDeal from './components/CardDeal';
import GetStarted from './components/GetStarted';
import Stats from './components/Stats';
import FeedbackCard from './components/FeedbackCard';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-primary w-full overflow-hidden ">
      {/* NavBAR */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

       {/* Hero Section */}
       <div className={`bg-primary ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
          <Hero />
         </div>
       </div> 

       {/* Body Section */}
       <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
         </div>
       </div>
    </div>
  );
}

export default App;
