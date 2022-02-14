import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import InfoContainer from "../components/InfoContainer";
import Staff from "../components/Staff";
import InstagramContainer from "../components/InstagramContainer";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation/>
      <Main/>
        <InfoContainer/>
        <InstagramContainer/>
        <Staff/>
        <Footer/>
    </div>
  )
}

export default Home;