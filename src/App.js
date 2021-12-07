import Header from './pages/Header';
import Home from './pages/Home/Home';
import FeaturesList from './pages/Features';
import CustomerSupport from './pages/СustomerSupport';
import CollaborativeSection from './pages/Collaborative/Collaborative';
import ContactExpert from './pages/ContactExpert/ContactExpert';
import PriceTable from './pages/PriceTable';
import Feedbacks from './pages/Feedbacks/Feedbacks';
import FooterBottomPart from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <FeaturesList />
      <CustomerSupport />
      <CollaborativeSection />
      <ContactExpert />
      <PriceTable />
      <Feedbacks />
      <FooterBottomPart />
    </>
  );
}

export default App;
