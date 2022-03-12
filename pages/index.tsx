import Navigation from "../components/Navigation";
import type { NextPage } from 'next'
import Footer from "../components/Footer";
import Main from "../components/Main";
import SchemeToggler from "../components/SchemeToggler";


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
