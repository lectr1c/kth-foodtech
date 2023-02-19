import SignUp from "../components/SignUp";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SchemeToggler from "../components/SchemeToggler";
import { useEffect, useState } from "react";
import axios from "axios";


const SigningUp = () => {
    
    
        return (
            <>
                <Navigation/>
                <SignUp/>
                <Footer/>
            </>
        )
}

export default SigningUp;