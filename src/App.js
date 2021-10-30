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
import TourPackages from './components/Home/TourPackages/TourPackages';
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
          <Footer></Footer>
        </Route>

        <Route path="/tours">
        <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <TourPackages></TourPackages>
          <Footer></Footer>
        </Route>


        <Route path="/admin">
        <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <Admin></Admin>
          <Footer></Footer>
        </Route>

        <Route path="/tourDetails/:tourId">
        <HeaderMain></HeaderMain>
          <Navbar></Navbar>
          <TourDetails></TourDetails>
          <Footer></Footer>
        </Route>






      </Switch>
    </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
