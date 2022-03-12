import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";
import Main from "../components/Main";
import SchemeToggler from "../components/SchemeToggler";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <div>
        <Navigation/>
        <Main/>
        <Footer/>
        <SchemeToggler/>
    </div>
  )
}

export default Home;
