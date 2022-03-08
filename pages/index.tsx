import type { NextPage } from 'next'
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: NextPage = () => {
  return (
    <div>
        <Navigation/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home;
