import { BrowserRouter , Switch, Route} from 'react-router-dom';
import './App.css';
import AddTour from './components/AddTour/AddTour';
import Admin from './components/Admin/Admin';
import AuthProvider from './components/context/authProvider';
import Footer from './components/Footer/Footer';
import Banner from './components/Header/Banner/Banner';
import HeaderMain from './components/Header/HeaderMain/HeaderMain';
import Navbar from './components/Header/Navbar/Navbar';
import Home from './components/Home/Home/Home';
import Tour from './components/Home/Tour/Tour';
import TourPackages from './components/Home/TourPackages/TourPackages';
import MyBooking from './components/MyBooking/MyBooking';
import SignIn from './components/SignIn/SignIn';
import TourDetails from './components/TourDetails/TourDetails';

function App() {
  return (
<AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <Banner></Banner>
          <Home></Home>
          <Footer></Footer>
        </Route>

        <Route path="/home">
          <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <Banner></Banner>
          <Home></Home>
          <Footer></Footer>
        </Route>

        <Route path="/about">
          <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <Footer></Footer>
        </Route>
        <Route path="/contact">
          <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <Footer></Footer>
        </Route>



        <Route path="/signIn">
        <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <SignIn></SignIn>
        </Route>

        <Route path="/tours">
        <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <TourPackages></TourPackages>
        </Route>

        {/* <Route path="/addTour">
        <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <AddTour></AddTour>
        </Route>

        <Route path="/myBooking">
        <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <MyBooking></MyBooking>
        </Route> */}

        <Route path="/admin">
        <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <Admin></Admin>
        </Route>

        <Route path="/tourDetails/:tourId">
        <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <TourDetails></TourDetails>
        </Route>






      </Switch>
    </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
