import Navigation from "../components/Navigation";
import type { NextPage } from 'next'
import Footer from "../components/Footer";
import TheTeam from "../components/TheTeam";
import Main from "../components/Main";
import SchemeToggler from "../components/SchemeToggler";
import FBMessenger from "../components/FBMessenger";


const Home: NextPage = () => {
  return (
    <div>
        <Navigation/>
        <Main/>
        <Footer/>
        <SchemeToggler/>
        <FBMessenger/>

    </div>
  )
}

export default Home;
