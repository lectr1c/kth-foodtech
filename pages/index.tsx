import type { NextPage } from 'next'
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import WavesSpacer from "../components/WavesSpacer";
import Main from "../components/Main";
import SchemeToggler from "../components/SchemeToggler";
import {Divider} from "@mantine/core";

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
