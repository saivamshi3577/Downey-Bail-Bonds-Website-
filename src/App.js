import { Route, Routes } from 'react-router-dom';
import Bondsmen from "../src/Components/About Us/BondsMen";
import Contactus from "../src/Components/About Us/Contact-us";
import License from "../src/Components/About Us/License";
import ProfessionalBail from "../src/Components/About Us/ProfessionalBailServicesBlog";
import Aboutus from "../src/Components/About Us/about";
import Byfax from "../src/Components/BailCosts/b-by-fax";
import ArrestAndBookings from "../src/Components/BailProcess/ArrestandBookingMain";
import Consumer from "../src/Components/BailProcess/consumer";
import Releasefromjail from "../src/Components/BailProcess/release-from-jail";
import Homecomponent from "../src/Components/Home/maincomponent";
import CaliforniaBail from "../src/Components/Resources/Californiabailschedules";
import Innamatelocator from "../src/Components/Resources/Inmatelocator";
import './App.css';
import OurMission from './Components/About Us/OurMission';
import CodeOfEthics from './Components/About Us/codeOfEthics';
import CustomerComments from './Components/About Us/customerComments';
import Privacy from './Components/About Us/privacy-comp';
import BailCosts from './Components/BailCosts/BailCosts';
import CostFee from './Components/BailCosts/Cost-feesPartA';
import HistoryOfBail from './Components/BailProcess/HistoryOfBail';
import HowBailmain from './Components/BailProcess/HowBailmain';
import Criminal from "./Components/BailProcess/criminal";
import GettingBail from './Components/BailProcess/getting-bail';
import Question from './Components/BailProcess/question';
import Footer from "./Components/Footer/dbbfooter";
import About from './Components/Home/aboutus';
import Azusa from './Components/Location/Azusa';
import Brea from './Components/Location/Brea';
import Cerritos from './Components/Location/Cerritos';
import Compton from './Components/Location/Compton';
import LaHabra from './Components/Location/LaHabra';
import Lakewood from './Components/Location/Lakewood';
import LongBeach from './Components/Location/LongBeach';
import LosAngels from "./Components/Location/LosAngeles";
import Lynwood from './Components/Location/Lynwood';
import Norwalk from './Components/Location/Norwalk';
import OrangeCounty from './Components/Location/OrangeCounty';
import PicoRivera from './Components/Location/PicoRivera';
import Riverside from './Components/Location/Riverside';
import SanBernardino from './Components/Location/SanBernardino';
import SanDiego from './Components/Location/SanDiego';
import SouthGate from './Components/Location/SouthGate';
import VanNyus from './Components/Location/VanNyus';
import Whittier from './Components/Location/Whittier';
import Navbar from './Components/Navbar/navbar';
import CourtLocator from './Components/Resources/CourtLocator';
import JailLocator from './Components/Resources/JailLocator';
import Californiabaillaw from './Components/Resources/californiabaillaw';
import FaqComponent from './Components/Resources/faq';
import Importantlinks from './Components/Resources/importantlinks';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homecomponent/>}></Route>
        <Route path="/Consumer" element={<Consumer/>}></Route>
        <Route path='/Releasefromjail' element={<Releasefromjail/>}></Route>
        <Route path='/ArrestAndBooking' element={<ArrestAndBookings/>}></Route>
        <Route path='/Bailcosts' element={<BailCosts/>}></Route>
        <Route path='/Byfax' element={<Byfax/>}></Route>
        <Route path="/HowBailWorks" element={<HowBailmain/>}></Route>
        <Route path="/License" element={<License/>}></Route>
        <Route path="/ProfessionalBail" element={<ProfessionalBail/>}></Route>
        <Route path="/Bondsmen" element={<Bondsmen/>}></Route>
        <Route path="/Innamatelocator" element={<Innamatelocator/>}></Route>
        <Route path="/CaliforniaBail" element={<CaliforniaBail/>}></Route>
        <Route path="/Usefullinks" element={<Importantlinks/>}></Route>
        <Route path='/Courtlocator' element={<CourtLocator/>}></Route>
        <Route path='/Costfees' element={<CostFee/>}></Route>
        <Route path='/AboutUs' element={<About/>}></Route>
        <Route path='/Contactus' element={<Contactus/>}></Route>
        <Route path='/Criminal' element={<Criminal/>}></Route>
        <Route path='/Customercomments' element={<CustomerComments/>}></Route>
        <Route path='/codeOfEthics' element={<CodeOfEthics/>}></Route>
        <Route path='/Privacy' element={<Privacy/>}></Route>
        <Route path='/Faq' element={<FaqComponent/>}></Route>
        <Route path='/Jailocator' element={<JailLocator/>}></Route>
        <Route path='/Ourmission' element={<OurMission/>}></Route>
        <Route path='/CaliforniaBailLaw' element={<Californiabaillaw/>}></Route>
        <Route path='/Process' element={<GettingBail/>}></Route>
        <Route path='/Questions' element={<Question/>}></Route>
        <Route path='/History' element={<HistoryOfBail/>}></Route>
        <Route path='/About' element={<Aboutus/>}></Route>
        //Locations//
        <Route path="/LosAngels" element={<LosAngels/>}></Route>
        <Route path="/VanNuys" element={<VanNyus/>}></Route>
        <Route path="/Orangecountry" element={<OrangeCounty/>}></Route>
        <Route path="/SanBernardino" element={<SanBernardino/>}></Route>
        <Route path="/Whittier" element={<Whittier/>}></Route>
        <Route path="/Riverside" element={<Riverside/>}></Route>
        <Route path="/LongBeach" element={<LongBeach/>}></Route>
        <Route path="/Azusa" element={<Azusa/>}></Route>
        <Route path="/sandiego" element={<SanDiego/>}></Route>
        <Route path="/Brea" element={<Brea/>}></Route>
        <Route path="/Picorivera" element={<PicoRivera/>}></Route>
        <Route path="/Lynwood" element={<Lynwood/>}></Route>
        <Route path="/Compton" element={<Compton/>}></Route>
        <Route path="/Lakewood" element={<Lakewood/>}></Route>
        <Route path="/Cerritos" element={<Cerritos/>}></Route>
        <Route path="/Norwalk" element={<Norwalk/>}></Route>
        <Route path="/SouthGate" element={<SouthGate/>}></Route>
        <Route path="/Lahabra" element={<LaHabra/>}></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
