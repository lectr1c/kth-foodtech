import Navigation from "../components/Navigation";
import type { NextPage } from 'next'
import Footer from "../components/Footer";
import TheTeam from "../components/Staff";
import Main from "../components/Main";
import SchemeToggler from "../components/SchemeToggler";
import FBMessenger from "../components/FBMessenger";

const Home: NextPage = () => {
  return (
    <div>
        <Navigation/>
        <Main/>
        <Footer/>
        <FBMessenger/>
    </div>
  )
}

export default Home;
