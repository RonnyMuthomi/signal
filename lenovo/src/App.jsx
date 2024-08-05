import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
//import Dashboard from './components/Pages/Dashboard';
import Language from './components/Pages/Language';
import Browse from './components/Pages/Browse';
import Create from './components/Pages/Create';
import Edit from './components/Pages/Edit';
import Read from './components/Pages/Read';
import Activities from './components/Pages/Activities';
import SignUp from './components/Pages/SignUp';
// import Header from "./components/mincomponents/Header";
import Navbar from "./components/mincomponents/Navbar";
//import MessageHost from './components/Pages/Message-Host';
import Preevent from './components/Pages/Preevent';
import Birthday from './components/Pages/Birthday';
import Videoshoot from './components/Pages/Videoshoot';
import Bridal from './components/Pages/Bridal';
import Graduation from './components/Pages/GetPortfolio';
import Team from './components/Pages/Team';
import Vendors from './components/Pages/Vendors';
import Loginmodal from './components/mincomponents/Loginmodal';
import Bookings from './components/Pages/Bookings';
import VendorDashboard from './components/Pages/VendorDashboard';
import GetPortfolio from './components/Pages/GetPortfolio';
import Footer from './components/mincomponents/Footer';
import MessageHost from './components/Pages/MessageHost';
import { VendorHome } from './components/component/vendor-home';
import { EventPage } from './components/component/event-page';
import { ManageAccount } from './components/component/manage-account';
import ManageClientProfile from './components/mincomponents/ManageClientProfile';
import ProtectedRoute from './components/mincomponents/ProtectedRoute';
import { NotificationPage } from './components/component/notification-page';
import { VendorCalender } from './components/component/vendor-calender';
// import { Pdashboard } from './components/component/pdashboard';
// import PortfolioLists from './components/mincomponents/PortfolioLists';
// import PortfolioUpload from './components/mincomponents/PortfolioUpload';

export default function App() {
  return (
    <>
      {/* <Header/> */}
      <Navbar />
      {/* <PortfolioLists/>
      <PortfolioUpload/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Browse" element={<ProtectedRoute element={Browse} />} />
        <Route path="/Loginmodal" element={<Loginmodal />} />
        <Route path="/Vendors" element={<Vendors />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Read" element={<Read />} />
        <Route path="/MessageHost/:portfolioId" element={<MessageHost />} />
        <Route path="/Preevent" element={<Preevent />} />
        <Route path="/Birthday" element={<Birthday />} />
        <Route path="/Videoshoot" element={<Videoshoot />} />
        <Route path="/Bridal" element={<Bridal />} />
        <Route path="/Graduation" element={<Graduation />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Language" element={<Language />} />
        <Route path="/portfolio/:portfolioId" element={<Bookings />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/VendorDashboard" element={<VendorDashboard />} /> 
        <Route path="/GetPortfolio" element={<GetPortfolio />} />
          <Route path="/VendorHome" element={<VendorHome/>} /> 
        <Route path="/EventPage" element={<EventPage />} />     
         <Route path="/ManageAccount" element={<ManageAccount />} /> 
         <Route path="/ManageClientProfile" element={<ManageClientProfile />} />
         <Route path="/NotificationPage" element={< NotificationPage />} />
         <Route path="/VendorCalender" element={<VendorCalender />} />
         
        {/*  */}
      </Routes>
      <Footer />
    </>
  );
}
