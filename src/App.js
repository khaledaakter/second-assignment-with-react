
import './App.scss';
import Header from './component/Header'
import Banner from './component/Banner'
import LogoSlider from './component/LogoSlider'
import Card from './component/Card'
import FooterTop from './component/FooterTop'
import ImageMap from './component/ImageMap'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <ImageMap/>
      <Header/>
      <Banner/>
      <LogoSlider/>
      <Card/>
      <FooterTop/>
      <Footer/>
    </>
  );
}

export default App;
