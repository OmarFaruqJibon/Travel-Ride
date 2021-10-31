import { BrowserRouter , Switch, Route} from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Admin from './components/Admin/Admin';
import ContactUs from './components/ContactUs/ContactUs';
import AuthProvider from './components/context/authProvider';
import Footer from './components/Footer/Footer';
import Banner from './components/Header/Banner/Banner';
import Navbar from './components/Header/Navbar/Navbar';
import Home from './components/Home/Home/Home';
import TourPackages from './components/Home/TourPackages/TourPackages';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/SignIn/PrivateRoute/PrivateRoute';
import SignIn from './components/SignIn/SignIn';
import TourDetails from './components/TourDetails/TourDetails';

function App() {
  return (
<AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar></Navbar>
          <Banner></Banner>
          <Home></Home>
          <Footer></Footer>
        </Route>
        <Route path="/home">
          <Navbar></Navbar>
          <Banner></Banner>
          <Home></Home>
          <Footer></Footer>
        </Route>
        <Route path="/about">
          <Navbar></Navbar>
          <AboutUs></AboutUs>
          <Footer></Footer>
        </Route>
        <Route path="/contact">
          <Navbar></Navbar>
          <ContactUs></ContactUs>
          <Footer></Footer>
        </Route>
        <Route path="/signIn">
          <Navbar></Navbar>
          <SignIn></SignIn>
          <Footer></Footer>
        </Route>
        <Route path="/tours">
          <Navbar></Navbar>
          <TourPackages></TourPackages>
          <Footer></Footer>
        </Route>
        <PrivateRoute path="/admin">
          <Navbar></Navbar>
          <Admin></Admin>
          <Footer></Footer>
        </PrivateRoute>
        <PrivateRoute path="/tourDetails/:tourId">
          <Navbar></Navbar>
          <TourDetails></TourDetails>
          <Footer></Footer>
        </PrivateRoute>
        <Route path="*">
          <Navbar></Navbar>
          <NotFound></NotFound>
          <Footer></Footer>
        </Route>
      </Switch>
    </BrowserRouter>
    
    </AuthProvider>
  );
}

export default App;
